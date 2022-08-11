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

namespace app\adminapi\lists\auth;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsExtendInterface;
use app\common\lists\ListsSearchInterface;
use app\common\lists\ListsSortInterface;
use app\common\model\auth\Admin;
use app\common\model\auth\Role;
use app\common\model\dept\Dept;

/**
 * 管理员列表
 * Class AdminLists
 * @package app\adminapi\lists\auth
 */
class AdminLists extends BaseAdminDataLists implements ListsExtendInterface, ListsSearchInterface, ListsSortInterface
{
    /**
     * @notes 设置导出字段
     * @return string[]
     * @author 段誉
     * @date 2021/12/29 10:08
     */
    public function setExcelFields(): array
    {
        return [
            'account' => '账号',
            'name' => '名称',
            'role_name' => '角色',
            'create_time' => '创建时间',
            'login_time' => '最后登录时间',
            'login_ip' => '最后登录IP',
            'disable_desc' => '状态',
        ];
    }


    /**
     * @notes 设置导出文件名
     * @return string
     * @author 段誉
     * @date 2021/12/29 10:08
     */
    public function setFileName(): string
    {
        return '管理员列表';
    }


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author 段誉
     * @date 2021/12/29 10:07
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['name', 'account'],
            '=' => ['role_id']
        ];
    }


    /**
     * @notes 设置支持排序字段
     * @return string[]
     * @author 段誉
     * @date 2021/12/29 10:07
     * @remark 格式: ['前端传过来的字段名' => '数据库中的字段名'];
     */
    public function setSortFields(): array
    {
        return ['create_time' => 'create_time', 'id' => 'id'];
    }


    /**
     * @notes 设置默认排序
     * @return string[]
     * @author 段誉
     * @date 2021/12/29 10:06
     */
    public function setDefaultOrder(): array
    {
        return ['id' => 'desc'];
    }


    /**
     * @notes 获取管理列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2021/12/29 10:05
     */
    public function lists(): array
    {
        $field = [
            'id', 'name', 'account', 'role_id', 'create_time', 'disable', 'root',
            'login_time', 'login_ip', 'multipoint_login', 'avatar', 'dept_id'
        ];

        $adminLists = Admin::with(['dept'])->field($field)
            ->where($this->searchWhere)
            ->append(['disable_desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order($this->sortOrder)
            ->select()
            ->toArray();

        //获取角色数组（'角色id'=>'角色名称')
        $roleLists = Role::column('name', 'id');

        //管理员列表增加角色名称
        foreach ($adminLists as $k => $v) {
            $adminLists[$k]['role_name'] = $roleLists[$v['role_id']] ?? '';
            if ($v['root'] == 1) {
                $adminLists[$k]['role_name'] = '系统管理员';
            }
            $adminLists[$k]['dept_name'] = empty($v['dept_name']) ? '-' : $v['dept_name'];
        }

        return $adminLists;
    }

    /**
     * @notes 获取数量
     * @return int
     * @author 令狐冲
     * @date 2021/7/13 00:52
     */
    public function count(): int
    {
        return Admin::where($this->searchWhere)->count();
    }

    public function extend()
    {
        return [];
    }
}