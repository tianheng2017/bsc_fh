<?php
// +----------------------------------------------------------------------
// | 挖鱼网源码 必属精品
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 访问官网：https://www.wayu.cn/
// | 挖鱼网源码 版权所有 拥有最终解释权
// | QQ群：248415224
// | 邮件客服：315@wayu.cn

namespace app\common\model;

use app\common\service\ConfigService;
use think\Exception;
use think\facade\Cache;
use think\facade\Db;


/**
 * Users模型
 * Class Users
 * @package app\common\model
 */
class Users extends BaseModel
{

    protected $name = 'users';

    /**
     * @notes 创建用户
     * @param string $address 用户钱包
     * @param int $fid 上级ID
     * @return Users|array|mixed|\think\Model|null
     * @throws Exception
     * @date 2022/3/28 11:43
     */
    public static function userCreate(string $address, int $fid)
    {
        Db::startTrans();
        try {
            $result = Users::create([
                'address'   =>  $address,
                'fid'       =>  $fid,
            ]);

            //注册关系处理
            Regpath::addRegpath($result->id, $fid);

            $user = self::find($result->id);

            // 更新缓存
            Cache::delete('all_address');

            Db::commit();
        } catch (\Exception $e) {
            Db::rollBack();
            throw new Exception($e->getMessage());
        }
        return $user;
    }

    /**
     * @notes id查地址
     * @param int $uid 用户ID
     * @return mixed|string 用户钱包地址
     * @date 2022/3/28 11:44
     */
    public static function id2address(int $uid)
    {
        return self::where('id', $uid)->value('address') ?? '';
    }

    /**
     * @notes 地址查id
     * @param string $address 钱包地址
     * @return int|mixed 用户ID
     * @date 2022/3/28 11:44
     */
    public static function address2id(string $address)
    {
        return self::where('address', $address)->value('id') ?? 0;
    }

    /**
     * @notes 查询某账号上级
     * @param int $uid 用户ID
     * @return mixed 用户上级ID
     * @date 2022/3/28 11:45
     */
    public static function getFid(int $uid)
    {
        return self::where('id', $uid)->value('fid');
    }

    /**
     * @notes 改变某账户余额
     * @param int $uid 用户ID
     * @param int $type 账户类型
     * @param float $amount 金额
     * @return bool
     * @throws Exception
     * @date 2022/3/28 11:45
     */
    public static function changeAmount(int $uid, int $type, float $amount):bool
    {
        if ($amount == 0) return false;

        try {
            self::where('id', $uid)->inc('amount'.$type, $amount)->update();
        } catch (\Exception $e) {
            throw new Exception($e->getMessage());
        }

        return true;
    }

    /**
     * @notes 查询某账户余额
     * @param int $uid 用户ID
     * @param int $type 账户类型
     * @return mixed 余额
     * @date 2022/3/28 11:46
     */
    public static function selectAmount(int $uid, int $type = 1)
    {
        return self::where('id', $uid)->value('amount'.$type);
    }

    /** 获取全网持币总量
     * @return float 持币总量
     */
    public static function getAllValidAmount1()
    {
        // 参与所需代币
        $required_coin = (float)ConfigService::get('website', 'required_coin');

        return self::where('amount1', '>=', $required_coin)->sum('amount1');
    }

}