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

declare (strict_types=1);

namespace app\common\exception;

use think\Exception;

/**
 * 控制器继承异常
 * Class ControllerExtendException
 * @package app\common\exception
 */
class ControllerExtendException extends Exception
{
    /**
     * 构造方法
     * @access public
     * @param string $message
     * @param string $model
     * @param array $config
     */
    public function __construct(string $message, string $model = '', array $config = [])
    {
        $this->message = '控制器需要继承模块的基础控制器：' . $message;
        $this->model = $model;
    }
}