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


use app\common\model\BaseModel;


/**
 * TransferLog模型
 * Class TransferLog
 * @package app\common\model
 */
class TransferLog extends BaseModel
{

    protected $name = 'transfer_log';

    /**查询今日转入金额
     * @return float 金额
     */
    public static function getTodayInAmount()
    {
        return self::whereDay('block_time')->sum('amount');
    }

}