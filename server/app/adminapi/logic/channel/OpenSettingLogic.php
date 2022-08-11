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

/**
 * 微信开放平台
 * Class AppSettingLogic
 * @package app\adminapi\logic\settings\app
 */
class OpenSettingLogic extends BaseLogic
{

    /**
     * @notes 获取微信开放平台设置
     * @return array
     * @author 段誉
     * @date 2022/3/29 11:03
     */
    public static function getConfig()
    {
        $config = [
            'app_id' => ConfigService::get('open_platform', 'app_id', ''),
            'app_secret' => ConfigService::get('open_platform', 'app_secret', ''),
        ];

        return $config;
    }


    /**
     * @notes 微信开放平台设置
     * @param $params
     * @author 段誉
     * @date 2022/3/29 11:03
     */
    public static function setConfig($params)
    {
        ConfigService::set('open_platform', 'app_id', $params['app_id'] ?? '');
        ConfigService::set('open_platform', 'app_secret', $params['app_secret'] ?? '');
    }
}