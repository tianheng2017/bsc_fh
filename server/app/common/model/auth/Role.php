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
use think\model\concern\SoftDelete;

/**
 * 角色模型
 * Class Role
 * @package app\common\model
 */
class Role extends BaseModel
{
    use SoftDelete;

    protected $deleteTime = 'delete_time';


    /**
     * @notes 角色与菜单关联关系
     * @return \think\model\relation\HasMany
     * @date 2022/7/6 11:16
     */
    public function roleMenuIndex()
    {
        return $this->hasMany(SystemRoleMenu::class, 'role_id');
    }
}