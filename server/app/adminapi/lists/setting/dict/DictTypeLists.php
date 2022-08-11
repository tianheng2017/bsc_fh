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

namespace app\adminapi\lists\setting\dict;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\dict\DictType;


/**
 * 字典类型列表
 * Class DictTypeLists
 * @package app\adminapi\lists\dictionary
 */
class DictTypeLists extends BaseAdminDataLists implements ListsSearchInterface
{

    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author 段誉
     * @date 2022/6/20 15:53
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['name', 'type'],
            '=' => ['status']
        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/6/20 15:54
     */
    public function lists(): array
    {
        return DictType::where($this->searchWhere)
            ->limit($this->limitOffset, $this->limitLength)
            ->append(['status_desc'])
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
    }


    /**
     * @notes 获取数量
     * @return int
     * @author 段誉
     * @date 2022/6/20 15:54
     */
    public function count(): int
    {
        return DictType::where($this->searchWhere)->count();
    }

}