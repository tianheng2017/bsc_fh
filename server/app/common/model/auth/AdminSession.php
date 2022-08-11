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

namespace app\common\model\auth;

use app\common\model\BaseModel;

class AdminSession extends BaseModel
{
    /**
     * @notes 关联管理员表
     * @return \think\model\relation\HasOne
     * @author 令狐冲
     * @date 2021/7/5 14:39
     */
    public function admin()
    {
        return $this->hasOne('admin', 'id', 'admin_id')
            ->field('id,multipoint_login');
    }
}