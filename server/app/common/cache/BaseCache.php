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

declare(strict_types=1);

namespace app\common\cache;

use think\App;
use think\Cache;

/**
 * 缓存基础类，用于管理缓存
 * Class BaseCache
 * @package app\common\cache
 */
abstract class BaseCache extends Cache
{
    /**
     * 缓存标签
     * @var string
     */
    protected $tagName;

    public function __construct()
    {
        parent::__construct(app());
        $this->tagName = get_class($this);
    }


    /**
     * @notes 重写父类set，自动打上标签
     * @param string $key
     * @param mixed $value
     * @param null $ttl
     * @return bool
     * @author 段誉
     * @date 2021/12/27 14:16
     */
    public function set($key, $value, $ttl = null): bool
    {
        return $this->store()->tag($this->tagName)->set($key, $value, $ttl);
    }


    /**
     * @notes 清除缓存类所有缓存
     * @return bool
     * @author 段誉
     * @date 2021/12/27 14:16
     */
    public function deleteTag(): bool
    {
        return $this->tag($this->tagName)->clear();
    }

}