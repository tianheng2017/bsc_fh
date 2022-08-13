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

namespace app\common\cache;



class ExportCache extends BaseCache
{

    protected $uniqid = '';

    public function __construct()
    {
        parent::__construct();
        //以微秒计的当前时间，生成一个唯一的 ID,以tagname为前缀
        $this->uniqid = md5(uniqid($this->tagName,true).mt_rand());
    }

    /**
     * @notes 获取excel缓存目录
     * @return string
     * @date 2021/7/28 17:36
     */
    public function getSrc()
    {
        return app()->getRootPath() . 'runtime/file/export/'.date('Y-m').'/'.$this->uniqid.'/';
    }


    /**
     * @notes 设置文件路径缓存地址
     * @param $fileName
     * @return string
     * @date 2021/7/28 17:36
     */
    public function setFile($fileName)
    {
        $src = $this->getSrc();
        $key = md5($src . $fileName) . time();
        $this->set($key, ['src' => $src, 'name' => $fileName], 300);
        return $key;
    }

    /**
     * @notes 获取文件缓存的路径
     * @param $key
     * @return mixed
     * @date 2021/7/26 18:36
     */
    public function getFile($key)
    {
        return $this->get($key);
    }

}