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

use think\Exception;


/**
 * MoneyLog模型
 * Class MoneyLog
 * @package app\common\model
 */
class MoneyLog extends BaseModel
{

    protected $name = 'money_log';

    /**
     * @notes 资金日志
     * @param int $uid 用户ID
     * @param int $direction 方向 0增加 1减少
     * @param float $amount 金额
     * @param int $mtype 日志类型
     * @param int $ext_id 扩展ID1
     * @return bool
     * @throws Exception
     * @date 2022/3/28 11:47
     */
    public static function addLog(int $uid, int $direction, float $amount, int $mtype, int $ext_id = 0)
    {
        try {
            self::create([
                'uid'       =>  $uid,
				'address'	=>	Users::id2address($uid),
                'direction' =>  $direction,
                'amount'    =>  $amount,
                'mtype'     =>  $mtype,
                'content'   =>  self::$mtype[$mtype],
                'ext_id'    =>  $ext_id,
            ]);
        } catch (\Exception $e) {
            throw new Exception($e->getMessage());
        }
        return true;
    }

}