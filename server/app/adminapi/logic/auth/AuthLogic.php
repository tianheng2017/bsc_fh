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

namespace app\adminapi\logic\auth;

use app\common\model\auth\Admin;
use app\common\model\auth\SystemMenu;
use app\common\model\auth\SystemRoleMenu;


/**
 * 权限功能类
 * Class AuthLogic
 * @package app\adminapi\logic\auth
 */
class AuthLogic
{

    /**
     * @notes 获取全部权限
     * @return mixed
     * @author 段誉
     * @date 2022/7/1 11:55
     */
    public static function getAllAuth()
    {
        return SystemMenu::distinct(true)
            ->where([
                ['is_disable', '=', 0],
                ['perms', '<>', '']
            ])
            ->column('perms');
    }


    /**
     * @notes 获取当前管理员角色按钮权限
     * @param $roleId
     * @return mixed
     * @author 段誉
     * @date 2022/7/1 16:10
     */
    public static function getBtnAuthByRoleId($admin)
    {
        if ($admin['root']) {
            return ['*'];
        }

        $menuId = SystemRoleMenu::whereIn('role_id', $admin['role_id'])
            ->column('menu_id');

        $where[] = ['is_disable', '=', 0];
        $where[] = ['perms', '<>', ''];

        $roleAuth = SystemMenu::distinct(true)
            ->where('id', 'in', $menuId)
            ->where($where)
            ->column('perms');

        $allAuth = SystemMenu::distinct(true)
            ->where($where)
            ->column('perms');

        $hasAllAuth = array_diff($allAuth, $roleAuth);
        if (empty($hasAllAuth)) {
            return ['*'];
        }

        return $roleAuth;
    }


    /**
     * @notes 获取管理员角色关联的菜单id(菜单，权限)
     * @param int $adminId
     * @return array
     * @author 段誉
     * @date 2022/7/1 15:56
     */
    public static function getAuthByAdminId(int $adminId): array
    {
        $admin = Admin::with(['role_menu'])
            ->where(['id' => $adminId])
            ->findOrEmpty()->toArray();

        if (empty($admin)) {
            return [];
        }

        $menuId = array_column($admin['role_menu'], 'menu_id');

        return SystemMenu::distinct(true)
            ->where([
                ['is_disable', '=', 0],
                ['perms', '<>', ''],
                ['id', 'in', $menuId],
            ])
            ->column('perms');
    }
}