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
 * H5设置逻辑层
 * Class HFiveSettingLogic
 * @package app\adminapi\logic\settings\h5
 */
class H5SettingLogic extends BaseLogic
{
    /**
     * @notes 获取H5设置
     * @return array
     * @date 2022/3/29 10:34
     */
    public static function getConfig()
    {
        $config = [
            'status' => ConfigService::get('h5', 'status'),
            'url' => request()->domain() . '/mobile'
        ];
        return $config;
    }


    /**
     * @notes H5设置
     * @param $params
     * @date 2022/3/29 10:34
     */
    public static function setConfig($params)
    {
        ConfigService::set('h5', 'status', $params['status']);
    }
}