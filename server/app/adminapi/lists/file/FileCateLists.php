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

namespace app\adminapi\lists\file;


use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\file\FileCate;

/**
 * 文件分类列表
 * Class FileCateLists
 * @package app\adminapi\lists\file
 */
class FileCateLists extends BaseAdminDataLists implements ListsSearchInterface
{

    /**
     * @notes 文件分类搜素条件
     * @return \string[][]
     * @date 2021/12/29 14:24
     */
    public function setSearch(): array
    {
        return [
            '=' => ['type']
        ];
    }


    /**
     * @notes 获取文件分类列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @date 2021/12/29 14:24
     */
    public function lists(): array
    {
        $lists = (new FileCate())->field(['id,pid,type,name'])
            ->where($this->searchWhere)
            ->select()->toArray();

        return linear_to_tree($lists, 'children');
    }


    /**
     * @notes 获取文件分类数量
     * @return int
     * @date 2021/12/29 14:24
     */
    public function count(): int
    {
        return (new FileCate())->where($this->searchWhere)->count();
    }
}