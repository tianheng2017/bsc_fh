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
namespace app\adminapi\validate\setting;
use app\common\validate\BaseValidate;

/**
 * 用户设置验证
 * Class UserConfigValidate
 * @package app\adminapi\validate\setting
 */
class UserConfigValidate extends BaseValidate
{
    protected $regex = ['money'=>'/^[0-9]+(.[0-9]{1,2})?$/'];

    protected $rule = [
        'register_way'              => 'require|array',
        'login_way'                 => 'requireIf:scene,register|array',
        'is_mobile_register_code'   => 'require|in:0,1',
        'coerce_mobile'             => 'requireIf:scene,register|in:0,1',
        'h5_wechat_auth'            => 'in:0,1',
        'h5_auto_wechat_auth'       => 'in:0,1',
        'mnp_wechat_auth'           => 'in:0,1',
        'mnp_auto_wechat_auth'      => 'in:0,1',
        'app_wechat_auth'           => 'in:0,1',
        'default_avatar'            => 'require',
    ];
    protected $message = [
        'default_avatar.require'            => '请上传用户默认头像',
        'register_way.require'              => '请选择注册方式',
        'register_way.array'                => '注册方式值错误',
        'login_way.requireIf'               => '请选择登录方式',
        'login_way.array'                   => '登录方式值错误',
        'is_mobile_register_code.require'   => '请选择手机号码注册需验证码',
        'is_mobile_register_code.in'        => '手机号码注册需验证码错误',
        'coerce_mobile.requireIf'           => '请选择注册强制绑定手机',
        'coerce_mobile.in'                  => '注册强制绑定手机值错误',
        'h5_wechat_auth.in'                 => '公众号微信授权登录值错误',
        'h5_auto_wechat_auth.in'            => '公众号微信授权登录值错误',
        'mnp_wechat_auth.in'                => '小程序授权登录值错误',
        'app_wechat_auth.in'                => '小程序微信授权登录值错误',
    ];

    //用户设置验证
    public function sceneUser()
    {
        return $this->only(['default_avatar']);
    }

    //注册验证
    public function sceneRegister()
    {
        return $this->only(['register_way','is_mobile_register_code']);
    }
}