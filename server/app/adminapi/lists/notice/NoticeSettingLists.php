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

namespace app\adminapi\lists\notice;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\notice\NoticeSetting;

/**
 * 通知设置
 * Class NoticeSettingLists
 * @package app\adminapi\lists\notice
 */
class NoticeSettingLists extends BaseAdminDataLists implements ListsSearchInterface
{
    /**
     * @notes 搜索条件
     * @return \string[][]
     * @author ljj
     * @date 2022/2/17 2:21 下午
     */
    public function setSearch(): array
    {
        return [
            '=' => ['recipient', 'type']
        ];
    }

    /**
     * @notes 通知设置列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2022/2/16 3:18 下午
     */
    public function lists(): array
    {
        $lists = (new NoticeSetting())->field('id,scene_name,sms_notice,type')
            ->append(['sms_status_desc','type_desc'])
            ->where($this->searchWhere)
            ->select()
            ->toArray();

        return $lists;
    }

    /**
     * @notes 通知设置数量
     * @return int
     * @author ljj
     * @date 2022/2/16 3:18 下午
     */
    public function count(): int
    {
        return (new NoticeSetting())->where($this->searchWhere)->count();
    }
}