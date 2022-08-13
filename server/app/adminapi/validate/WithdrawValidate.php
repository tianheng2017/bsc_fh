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
     * @date 2022/08/12 23:49
     */
    protected $rule = [
        'id'        =>  'require',
        'status'    =>  'require|in:1,2',
        'remark'    =>  'requireIf:status,2'
    ];

    protected $message = [
        'id.require'        =>  'ID不能为空',
        'status.require'    =>  '请选择审核结果',
        'status.in'         =>  '审核结果不存在',
        'remark.requireIf'  =>  '请输入拒绝理由',
    ];


    /**
     * @notes 审核场景
     * @return WithdrawValidate
     * @date 2022/08/12 23:49
     */
    public function sceneAudit()
    {
        return $this->only(['id', 'status', 'remark']);
    }


    /**
     * @notes 删除场景
     * @return WithdrawValidate
     * @date 2022/08/12 23:49
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return WithdrawValidate
     * @date 2022/08/12 23:49
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}