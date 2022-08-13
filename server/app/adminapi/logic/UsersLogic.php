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

namespace app\adminapi\logic;


use app\common\model\Users;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * Users逻辑
 * Class UsersLogic
 * @package app\adminapi\logic
 */
class UsersLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @date 2022/08/11 10:48
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            Users::create([

            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 编辑
     * @param array $params
     * @return bool
     * @date 2022/08/11 10:48
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            Users::update([
                'id' => $params['id'],
                'amount1' => $params['amount1'],
                'amount2' => $params['amount2'],
            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 删除
     * @param array $params
     * @return bool
     * @date 2022/08/11 10:48
     */
    public static function delete(array $params): bool
    {
        return Users::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @date 2022/08/11 10:48
     */
    public static function detail($params): array
    {
        return Users::findOrEmpty($params['id'])->toArray();
    }
}