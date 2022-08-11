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

namespace app\adminapi\lists\ad;


use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\ad\AdPosition;

/**
 * 广告位列表
 * Class AdPositionLists
 * @package app\adminapi\lists\ad
 */
class AdPositionLists extends BaseAdminDataLists implements ListsSearchInterface
{
    /**
     * @notes 搜索条件
     * @return \string[][]
     * @author ljj
     * @date 2022/2/14 4:32 下午
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['name'],
            '=' => ['attr'],
        ];
    }

    /**
     * @notes 广告位列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2022/2/14 4:35 下午
     */
    public function lists(): array
    {
        $lists = (new AdPosition())->field('id,name,attr,status,create_time')
            ->order('id','desc')
            ->append(['attr_desc'])
            ->where($this->searchWhere)
            ->limit($this->limitOffset,$this->limitLength)
            ->select()
            ->toArray();

        return $lists;
    }

    /**
     * @notes 广告位总数
     * @return int
     * @author ljj
     * @date 2022/2/14 4:36 下午
     */
    public function count(): int
    {
        return (new AdPosition())->where($this->searchWhere)->count();
    }
}