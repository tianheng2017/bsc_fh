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

use app\common\{
    cache\AdminAuthCache,
    model\auth\Role,
    logic\BaseLogic,
    model\auth\SystemRoleMenu
};
use think\facade\Db;


/**
 * 角色逻辑层
 * Class RoleLogic
 * @package app\adminapi\logic\auth
 */
class RoleLogic extends BaseLogic
{

    /**
     * @notes 添加角色
     * @param array $params
     * @return bool
     * @author 段誉
     * @date 2021/12/29 11:50
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            $menuId = !empty($params['menu_id']) ? $params['menu_id'] : [];

            $role = Role::create([
                'name' => $params['name'],
                'desc' => $params['desc'] ?? '',
                'sort' => $params['sort'] ?? 0,
            ]);

            $data = [];
            foreach ($menuId as $item) {
                if (empty($item)) {
                    continue;
                }
                $data[] = [
                    'role_id' => $role['id'],
                    'menu_id' => $item,
                ];
            }
            (new SystemRoleMenu)->insertAll($data);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 编辑角色
     * @param array $params
     * @return bool
     * @author 段誉
     * @date 2021/12/29 14:16
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            $menuId = !empty($params['menu_id']) ? $params['menu_id'] : [];

            Role::update([
                'id' => $params['id'],
                'name' => $params['name'],
                'desc' => $params['desc'] ?? '',
                'sort' => $params['sort'] ?? 0,
            ]);

            SystemRoleMenu::where(['role_id' => $params['id']])->delete();

            $data = [];
            foreach ($menuId as $item) {
                $data[] = [
                    'role_id' => $params['id'],
                    'menu_id' => $item,
                ];
            }
            (new SystemRoleMenu)->insertAll($data);

            (new AdminAuthCache())->deleteTag();

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 删除角色
     * @param int $id
     * @return bool
     * @author 段誉
     * @date 2021/12/29 14:16
     */
    public static function delete(int $id)
    {
        Role::destroy(['id' => $id]);
        (new AdminAuthCache())->deleteTag();
        return true;
    }


    /**
     * @notes 角色详情
     * @param int $id
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2021/12/29 14:17
     */
    public static function detail(int $id): array
    {
        $detail = Role::field('id,name,desc,sort')->find($id);
        $authList = $detail->roleMenuIndex()->select()->toArray();
        $menuId = array_column($authList, 'menu_id');
        $detail['menu_id'] = $menuId;
        return $detail->toArray();
    }


}