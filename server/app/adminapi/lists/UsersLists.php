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

namespace app\adminapi\lists;


use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\Users;
use app\common\lists\ListsSearchInterface;


/**
 * Users列表
 * Class UsersLists
 * @package app\adminapi\lists
 */
class UsersLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @date 2022/08/11 10:48
     */
    public function setSearch(): array
    {
        return [
            '=' => ['address', 'fid'],

        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @date 2022/08/11 10:48
     */
    public function lists(): array
    {
        return Users::where($this->searchWhere)
            ->field(['id', 'address', 'fid', 'amount1', 'amount2', 'count', 'create_time'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
    }


    /**
     * @notes 获取数量
     * @return int
     * @date 2022/08/11 10:48
     */
    public function count(): int
    {
        return Users::where($this->searchWhere)->count();
    }

}