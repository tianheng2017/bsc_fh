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
 * 微信公众号菜单验证器
 * Class OfficialAccountMenuValidate
 * @package app\adminapi\validate\wechat
 */
class OfficialAccountMenuValidate extends BaseValidate
{
    protected $rule = [
        'menu' => 'require|array'
    ];

    protected $message = [
        'menu.require' => '请先设置菜单',
        'menu.array' =>  '菜单须为数组格式'
    ];
}