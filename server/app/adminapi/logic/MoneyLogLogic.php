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


use app\common\model\MoneyLog;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * MoneyLog逻辑
 * Class MoneyLogLogic
 * @package app\adminapi\logic
 */
class MoneyLogLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @date 2022/08/12 07:44
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            MoneyLog::create([

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
     * @date 2022/08/12 07:44
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            MoneyLog::update([

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
     * @date 2022/08/12 07:44
     */
    public static function delete(array $params): bool
    {
        return MoneyLog::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @date 2022/08/12 07:44
     */
    public static function detail($params): array
    {
        return MoneyLog::findOrEmpty($params['id'])->toArray();
    }
}