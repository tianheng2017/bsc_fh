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

namespace app\adminapi\validate;


use app\common\validate\BaseValidate;


/**
 * Withdraw验证器
 * Class WithdrawValidate
 * @package app\adminapi\validate
 */
class WithdrawValidate extends BaseValidate
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2022/08/12 23:49
     */
    protected $rule = [
        'id' => 'require',
    ];


    /**
     * @notes 添加场景
     * @return WithdrawValidate
     * @author likeadmin
     * @date 2022/08/12 23:49
     */
    public function sceneAdd()
    {
        return $this->remove('id', true);
    }


    /**
     * @notes 删除场景
     * @return WithdrawValidate
     * @author likeadmin
     * @date 2022/08/12 23:49
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return WithdrawValidate
     * @author likeadmin
     * @date 2022/08/12 23:49
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}