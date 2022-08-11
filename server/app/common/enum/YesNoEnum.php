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
 * 通过枚举类，枚举只有两个值的时候使用
 * Class YesNoEnum
 * @package app\common\enum
 */
class YesNoEnum
{
    const YES = 1;
    const NO = 0;

    /**
     * @notes 获取禁用状态
     * @param bool $value
     * @return string|string[]
     * @author 令狐冲
     * @date 2021/7/8 19:02
     */
    public static function getDisableDesc($value = true)
    {
        $data = [
            self::YES => '禁用',
            self::NO => '正常'
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }
}