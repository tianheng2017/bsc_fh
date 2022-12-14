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


namespace app\common\logic;


/**
 * 逻辑基类
 * Class BaseLogic
 * @package app\common\logic
 */
class BaseLogic
{
    /**
     * 错误信息
     * @var string
     */
    protected static $error;

    /**
     * 返回状态码
     * @var int
     */
    protected static $returnCode = 0;


    protected static $returnData;

    /**
     * @notes 获取错误信息
     * @return string
     * @date 2021/7/21 18:23
     */
    public static function getError() : string
    {
        if (false === self::hasError()) {
            return '系统错误';
        }
        return self::$error;
    }


    /**
     * @notes 设置错误信息
     * @param $error
     * @date 2021/7/21 18:20
     */
    public static function setError($error) : void
    {
        !empty($error) && self::$error = $error;
    }


    /**
     * @notes 是否存在错误
     * @return bool
     * @date 2021/7/21 18:32
     */
    public static function hasError() : bool
    {
        return !empty(self::$error);
    }


    /**
     * @notes 设置状态码
     * @param $code
     * @date 2021/7/28 17:05
     */
    public static function setReturnCode($code) : void
    {
        self::$returnCode = $code;
    }


    /**
     * @notes 特殊场景返回指定状态码,默认为0
     * @return int
     * @date 2021/7/28 15:14
     */
    public static function getReturnCode() : int
    {
        return self::$returnCode;
    }

    /**
     * @notes 获取内容
     * @return mixed
     * @author cjhao
     * @date 2021/9/11 17:29
     */
    public static function getReturnData()
    {
        return self::$returnData;
    }

}