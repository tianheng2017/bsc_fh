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

namespace app\adminapi\logic\setting\web;


use app\common\logic\BaseLogic;
use app\common\service\ConfigService;
use app\common\service\FileService;


/**
 * 网站设置
 * Class WebSettingLogic
 * @package app\adminapi\logic\setting
 */
class WebSettingLogic extends BaseLogic
{

    /**
     * @notes 获取网站信息
     * @return array
     * @date 2021/12/28 15:43
     */
    public static function getWebsiteInfo(): array
    {
        return [
            'name' => ConfigService::get('website', 'name'),
            'web_favicon' => FileService::getFileUrl(ConfigService::get('website', 'web_favicon')),
            'web_logo' => FileService::getFileUrl(ConfigService::get('website', 'web_logo')),
            'login_image' => FileService::getFileUrl(ConfigService::get('website', 'login_image')),
            'fh_wallet' => ConfigService::get('website', 'fh_wallet'),
            'required_coin' => ConfigService::get('website', 'required_coin'),
            'cbfh_bl' => ConfigService::get('website', 'cbfh_bl'),
			'api_key' => ConfigService::get('website', 'api_key'),
			'scan_node' => ConfigService::get('website', 'scan_node'),
			'token_contract' => ConfigService::get('website', 'token_contract'),
			'token_abi' => ConfigService::get('website', 'token_abi'),
        ];
    }


    /**
     * @notes 设置网站信息
     * @param array $params
     * @date 2021/12/28 15:43
     */
    public static function setWebsiteInfo(array $params)
    {
        $favicon = FileService::setFileUrl($params['web_favicon']);
        $logo = FileService::setFileUrl($params['web_logo']);
        $login = FileService::setFileUrl($params['login_image']);

        ConfigService::set('website', 'name', $params['name']);
        ConfigService::set('website', 'web_favicon', $favicon);
        ConfigService::set('website', 'web_logo', $logo);
        ConfigService::set('website', 'login_image', $login);
        ConfigService::set('website', 'fh_wallet', $params['fh_wallet']);
        ConfigService::set('website', 'required_coin', $params['required_coin']);
        ConfigService::set('website', 'cbfh_bl', $params['cbfh_bl']);
		ConfigService::set('website', 'api_key', $params['api_key']);
		ConfigService::set('website', 'scan_node', $params['scan_node']);
		ConfigService::set('website', 'token_contract', $params['token_contract']);
		ConfigService::set('website', 'token_abi', $params['token_abi']);
    }


    /**
     * @notes 获取版权备案
     * @return array
     * @date 2021/12/28 16:09
     */
    public static function getCopyright() : array
    {
        return ConfigService::get('copyright', 'config', []);
    }


    /**
     * @notes 设置版权备案
     * @param array $params
     * @return bool
     * @date 2022/8/8 16:33
     */
    public static function setCopyright(array $params)
    {
        try {
            if (!is_array($params['config'])) {
                throw new \Exception('参数异常');
            }
            ConfigService::set('copyright', 'config', $params['config'] ?? []);
            return true;
        } catch (\Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 设置政策协议
     * @param array $params
     * @author ljj
     * @date 2022/2/15 10:59 上午
     */
    public static function setAgreement(array $params)
    {
        ConfigService::set('agreement', 'service_title', $params['service_title'] ?? '');
        ConfigService::set('agreement', 'service_content', $params['service_content'] ?? '');
        ConfigService::set('agreement', 'privacy_title', $params['privacy_title'] ?? '');
        ConfigService::set('agreement', 'privacy_content', $params['privacy_content'] ?? '');
    }

    /**
     * @notes 获取政策协议
     * @return array
     * @author ljj
     * @date 2022/2/15 11:15 上午
     */
    public static function getAgreement() : array
    {
        $config = [
            'service_title' => ConfigService::get('agreement', 'service_title'),
            'service_content' => ConfigService::get('agreement', 'service_content'),
            'privacy_title' => ConfigService::get('agreement', 'privacy_title'),
            'privacy_content' => ConfigService::get('agreement', 'privacy_content'),
        ];
        return $config;
    }
}