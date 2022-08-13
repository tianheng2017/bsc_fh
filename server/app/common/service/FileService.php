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

namespace app\common\service;

use think\facade\Cache;

class FileService
{

    /**
     * @notes 补全路径
     * @param string $uri
     * @param string $type
     * @return string
     * @date 2021/12/28 15:19
     * @remark
     * 场景一:补全域名路径,仅传参$uri;
     *      例: FileService::getFileUrl('uploads/img.png');
     *      返回 http://www.likeadmin.localhost/uploads/img.png
     *
     * 场景二:补全获取web根目录路径, 传参$uri 和 $type = public_path;
     *      例: FileService::getFileUrl('uploads/img.png', 'public_path');
     *      返回 /project-services/likeadmin/server/public/uploads/img.png
     *
     * 场景三:获取当前储存方式的域名
     *      例: FileService::getFileUrl();
     *      返回 http://www.likeadmin.localhost/
     */
    public static function getFileUrl(string $uri = '', string $type = '') : string
    {
        if (strstr($uri, 'http://'))  return $uri;
        if (strstr($uri, 'https://')) return $uri;

        $default = Cache::get('STORAGE_DEFAULT');
        if (!$default) {
            $default = ConfigService::get('storage', 'default', 'local');
            Cache::set('STORAGE_DEFAULT', $default);
        }

        if ($default === 'local') {
            if($type == 'public_path') {
                return public_path(). $uri;
            }
            $domain = request()->domain();
        } else {
            $storage = Cache::get('STORAGE_ENGINE');
            if (!$storage) {
                $storage = ConfigService::get('storage', $default);
                Cache::set('STORAGE_ENGINE', $storage);
            }
            $domain = $storage ?  $storage['domain'] : '';
        }

        return self::format($domain, $uri);
    }

    /**
     * @notes 转相对路径
     * @param $uri
     * @return mixed
     * @author 张无忌
     * @date 2021/7/28 15:09
     */
    public static function setFileUrl($uri)
    {
        $default = ConfigService::get('storage', 'default', 'local');
        if ($default === 'local') {
            $domain = request()->domain();
            return str_replace($domain.'/', '', $uri);
        } else {
            $storage = ConfigService::get('storage', $default);
            return str_replace($storage['domain'].'/', '', $uri);
        }
    }


    /**
     * @notes 格式化url
     * @param $domain
     * @param $uri
     * @return string
     * @date 2022/7/11 10:36
     */
    public static function format($domain, $uri)
    {
        // 处理域名
        $domainLen = strlen($domain);
        $domainRight = substr($domain, $domainLen -1, 1);
        if ('/' == $domainRight) {
            $domain = substr_replace($domain,'',$domainLen -1, 1);
        }

        // 处理uri
        $uriLeft = substr($uri, 0, 1);
        if('/' == $uriLeft) {
            $uri = substr_replace($uri,'',0, 1);
        }

        return trim($domain) . '/' . trim($uri);
    }

}