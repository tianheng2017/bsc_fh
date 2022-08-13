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

use app\common\model\Withdraw;
use app\common\logic\BaseLogic;
use think\Exception;
use think\facade\Db;

/**
 * Withdraw逻辑
 * Class WithdrawLogic
 * @package app\adminapi\logic
 */
class WithdrawLogic extends BaseLogic
{
    /**
     * @notes 审核
     * @param array $params
     * @return bool
     * @date 2022/08/12 23:49
     */
    public static function audit(array $params): bool
    {
        Db::startTrans();
        try {
            if ($params['status'] == 1) {
                $params['remark'] = '';
            }

            Withdraw::update([
                'status'    =>  $params['status'],
                'remark'    =>  $params['remark'],
                'cl_time'   =>  time(),
            ], [
                'id'    =>  $params['id'],
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
     * @date 2022/08/12 23:49
     */
    public static function delete(array $params): bool
    {
        return Withdraw::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @date 2022/08/12 23:49
     */
    public static function detail($params): array
    {
        return Withdraw::findOrEmpty($params['id'])->toArray();
    }
}