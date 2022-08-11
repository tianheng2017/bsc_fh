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

namespace app\adminapi\validate\channel;

use app\common\validate\BaseValidate;

/**
 * 公众号设置
 * Class OfficialAccountSettingValidate
 * @package app\adminapi\validate\channel
 */
class OfficialAccountSettingValidate extends BaseValidate
{
    protected $rule = [
        'app_id' => 'require',
        'app_secret' => 'require',
        'encryption_type' => 'require|in:1,2,3',
    ];

    protected $message = [
        'app_id.require' => '请填写AppID',
        'app_secret.require' => '请填写AppSecret',
        'encryption_type.require' => '请选择消息加密方式',
        'encryption_type.in' => '消息加密方式状态值错误',
    ];
}