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
        'fh_wallet' =>  'require|checkWallet',
        'required_coin' =>  'require|number',
        'cbfh_bl'       =>  'require|egt:0|elt:100',
    ];

    protected $message = [
        'name.require' => '请填写网站名称',
        'name.max' => '网站名称最长为12个字符',
        'web_favicon.require' => '请上传网站图标',
        'web_logo.require' => '请上传网站logo',
        'login_image.require' => '请上传登录页广告图',
        'fh_wallet.require' =>  '请填写分红钱包地址',
        'required_coin.require' =>  '请填写参与所需代币',
        'required_coin.number'  =>  '参与所需代币必须为数字',
        'cbfh_bl.require'       =>  '请填写持币分红比例',
        'cbfh_bl.egt'       =>  '持币分红比例不能低于0',
        'cbfh_bl.elt'       =>  '持币分红比例不能高于100%',
    ];

    protected $scene = [
        'website' => ['name', 'web_favicon', 'web_logo', 'login_image', 'fh_wallet', 'required_coin'],
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