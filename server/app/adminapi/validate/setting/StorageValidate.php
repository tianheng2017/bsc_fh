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


/**
 * 存储引擎验证
 * Class StorageValidate
 * @package app\adminapi\validate\setting
 */
class StorageValidate extends BaseValidate
{

    protected $rule = [
        'engine' => 'require',
        'status' => 'require',
    ];



    /**
     * @notes 设置存储引擎参数场景
     * @return StorageValidate
     * @date 2022/4/20 16:18
     */
    public function sceneSetup()
    {
        return $this->only(['engine', 'status']);
    }


    /**
     * @notes 获取配置参数信息场景
     * @return StorageValidate
     * @date 2022/4/20 16:18
     */
    public function sceneDetail()
    {
        return $this->only(['engine']);
    }


    /**
     * @notes 切换存储引擎场景
     * @return StorageValidate
     * @date 2022/4/20 16:18
     */
    public function sceneChange()
    {
        return $this->only(['engine']);
    }
}