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

namespace app\adminapi\logic\setting\system;


use app\common\logic\BaseLogic;

/**
 * Class SystemLogic
 * @package app\adminapi\logic\setting\system
 */
class SystemLogic extends BaseLogic
{

    /**
     * @notes 系统环境信息
     * @return \array[][]
     * @date 2021/12/28 18:35
     */
    public static function getInfo() : array
    {
        $server = [
            ['param' => '服务器操作系统', 'value' => PHP_OS],
            ['param' => 'web服务器环境', 'value' => $_SERVER['SERVER_SOFTWARE']],
            ['param' => 'PHP版本', 'value' => PHP_VERSION],
        ];

        $env = [
            ['option' => 'PHP版本', 'require' => '8.0版本以上', 'status' => (int)comparePHP('8.0.0'), 'remark' => '']
        ];

        $auth = [
            ['dir' => '/runtime', 'require' => 'runtime目录可写', 'status' => (int)checkDirWrite('runtime'), 'remark' => ''],
        ];

        return [
            'server' => $server,
            'env' => $env,
            'auth' => $auth,
        ];
    }

}