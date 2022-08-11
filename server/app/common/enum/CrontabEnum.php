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

namespace app\common\enum;

/**
 * 定时任务枚举
 * Class CrontabEnum
 * @package app\common\enum
 */
class CrontabEnum
{
    /**
     * 类型
     * CRONTAB 定时任务
     */
    const CRONTAB = 1;
    const DAEMON = 2;

    /**
     * 定时任务状态
     */
    const START = 1;
    const STOP = 2;
    const ERROR = 3;
}