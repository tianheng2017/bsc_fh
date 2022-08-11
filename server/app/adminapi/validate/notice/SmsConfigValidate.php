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

namespace app\adminapi\validate\notice;

use app\common\validate\BaseValidate;

/**
 * 短信配置验证
 * Class SmsConfigValidate
 * @package app\adminapi\validate\notice
 */
class SmsConfigValidate extends BaseValidate
{
    protected $rule = [
        'type' => 'require',
        'sign' => 'require',
        'app_id' => 'requireIf:type,tencent',
        'app_key' => 'requireIf:type,ali',
        'secret_id' => 'requireIf:type,tencent',
        'secret_key' => 'require',
        'status' => 'require',
    ];

    protected $message = [
        'type.require' => '请选择类型',
        'sign.require' => '请输入签名',
        'app_id.requireIf' => '请输入app_id',
        'app_key.requireIf' => '请输入app_key',
        'secret_id.requireIf' => '请输入secret_id',
        'secret_key.require' => '请输入secret_key',
        'status.require' => '请选择状态',
    ];


    protected function sceneDetail()
    {
        return $this->only(['type']);
    }
}