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
use Web3\Utils;

/**
 * 网站设置验证器
 * Class WebSettingValidate
 * @package app\adminapi\validate\setting
 */
class WebSettingValidate extends BaseValidate
{
    protected $rule = [
        'name' => 'require|max:30',
        'web_favicon' => 'require',
        'web_logo' => 'require',
        'login_image' => 'require',
        'fh_wallet' =>  'checkWallet',
        'required_coin' =>  'number',
    ];

    protected $message = [
        'name.require' => '请填写网站名称',
        'name.max' => '网站名称最长为12个字符',
        'web_favicon.require' => '请上传网站图标',
        'web_logo.require' => '请上传网站logo',
        'login_image.require' => '请上传登录页广告图',
    ];

    protected $scene = [
        'website' => ['name', 'web_favicon', 'web_logo', 'login_image'],
    ];

    /** 钱包格式检测
     * @param $value
     * @return bool|string
     */
    public function checkWallet($value)
    {
        if (!Utils::isAddress($value)) {
            return '钱包地址格式不正确';
        }
        return true;
    }
}