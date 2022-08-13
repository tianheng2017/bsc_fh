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


use app\common\model\auth\Admin;
use app\common\model\auth\AdminSession;

/**
 * 管理员token缓存
 * Class AdminTokenCache
 * @package app\common\cache
 */
class AdminTokenCache extends BaseCache
{

    private $prefix = 'token_admin_';

    /**
     * @notes 通过token获取缓存管理员信息
     * @param $token
     * @return false|mixed
     * @date 2021/6/30 16:57
     */
    public function getAdminInfo($token)
    {
        //直接从缓存获取
        $adminInfo = $this->get($this->prefix . $token);
        if ($adminInfo) {
            return $adminInfo;
        }

        //从数据获取信息被设置缓存(可能后台清除缓存）
        $adminInfo = $this->setAdminInfo($token);
        if ($adminInfo) {
            return $adminInfo;
        }

        return false;
    }

    /**
     * @notes 通过有效token设置管理信息缓存
     * @param $token
     * @return array|false|mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @date 2021/7/5 12:12
     */
    public function setAdminInfo($token)
    {
        $adminSession = AdminSession::where([['token', '=', $token], ['expire_time', '>', time()]])
            ->find();
        if (empty($adminSession)) {
            return [];
        }
        $admin = Admin::where('id', '=', $adminSession->admin_id)
            ->with('role')
            ->find();

        $adminInfo = [
            'admin_id' => $admin->id,
            'root' => $admin->root,
            'name' => $admin->name,
            'account' => $admin->account,
            'role_name' => $admin->role['name'] ?? '',
            'role_id' => $admin->role_id,
            'token' => $token,
            'terminal' => $adminSession->terminal,
            'expire_time' => $adminSession->expire_time,
        ];
        $this->set($this->prefix . $token, $adminInfo, new \DateTime(Date('Y-m-d H:i:s', $adminSession->expire_time)));
        return $this->getAdminInfo($token);
    }

    /**
     * @notes 删除缓存
     * @param $token
     * @return bool
     * @date 2021/7/3 16:57
     */
    public function deleteAdminInfo($token)
    {
        return $this->delete($this->prefix . $token);
    }


}