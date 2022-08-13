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

namespace app\adminapi\lists\dept;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\dept\Jobs;

/**
 * 岗位列表
 * Class JobsLists
 * @package app\adminapi\lists\dept
 */
class JobsLists extends BaseAdminDataLists implements ListsSearchInterface
{

    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @date 2022/5/26 9:46
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['name'],
            '=' => ['code', 'status']
        ];
    }


    /**
     * @notes  获取管理列表
     * @return array
     * @author heshihu
     * @date 2022/2/21 17:11
     */
    public function lists(): array
    {
        $lists = Jobs::where($this->searchWhere)
            ->append(['status_desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['sort' => 'desc', 'id' => 'desc'])
            ->select()
            ->toArray();

        return $lists;
    }


    /**
     * @notes 获取数量
     * @return int
     * @date 2022/5/26 9:48
     */
    public function count(): int
    {
        return Jobs::where($this->searchWhere)->count();
    }

}