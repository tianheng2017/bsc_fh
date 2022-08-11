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

namespace app\adminapi\logic\channel;

use app\common\logic\BaseLogic;
use app\common\service\ConfigService;
use app\common\service\FileService;

/**
 * 小程序设置逻辑
 * Class MnpSettingsLogic
 * @package app\adminapi\logic\channel
 */
class MnpSettingsLogic extends BaseLogic
{
    /**
     * @notes 获取小程序配置
     * @return array
     * @author ljj
     * @date 2022/2/16 9:38 上午
     */
    public function getConfig()
    {
        $domainName = $_SERVER['SERVER_NAME'];
        $qrCode = ConfigService::get('mnp_settings', 'qr_code', '');
        $qrCode = empty($qrCode) ? $qrCode : FileService::getFileUrl($qrCode);
        $config = [
            'name'                  => ConfigService::get('mnp_settings', 'name', ''),
            'original_id'           => ConfigService::get('mnp_settings', 'original_id', ''),
            'qr_code'               => $qrCode,
            'app_id'                => ConfigService::get('mnp_settings', 'app_id', ''),
            'app_secret'            => ConfigService::get('mnp_settings', 'app_secret', ''),
            'request_domain'        => 'https://'.$domainName,
            'socket_domain'         => 'wss://'.$domainName,
            'upload_file_domain'     => 'https://'.$domainName,
            'download_file_domain'   => 'https://'.$domainName,
            'udp_domain'            => 'udp://'.$domainName,
            'business_domain'       => $domainName,
        ];

        return $config;
    }

    /**
     * @notes 设置小程序配置
     * @param $params
     * @author ljj
     * @date 2022/2/16 9:51 上午
     */
    public function setConfig($params)
    {
        $qrCode = isset($params['qr_code']) ? FileService::setFileUrl($params['qr_code']) : '';

        ConfigService::set('mnp_settings','name', $params['name'] ?? '');
        ConfigService::set('mnp_settings','original_id',$params['original_id'] ?? '');
        ConfigService::set('mnp_settings','qr_code',$qrCode);
        ConfigService::set('mnp_settings','app_id',$params['app_id']);
        ConfigService::set('mnp_settings','app_secret',$params['app_secret']);
    }
}