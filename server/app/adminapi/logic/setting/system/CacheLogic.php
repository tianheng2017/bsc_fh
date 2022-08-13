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
use think\facade\Cache;

/**
 * 系统缓存逻辑
 * Class CacheLogic
 * @package app\adminapi\logic\setting\system
 */
class CacheLogic extends BaseLogic
{
    /**
     * @notes 清楚系统缓存
     * @date 2022/4/8 16:29
     */
    public static function clear()
    {
       Cache::clear();
       del_target_dir(app()->getRootPath().'runtime/file',true);
    }
}