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

namespace app\adminapi\lists\crontab;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\Crontab;

/**
 * 定时任务列表
 * Class CrontabLists
 * @package app\adminapi\lists\crontab
 */
class CrontabLists extends BaseAdminDataLists
{
    /**
     * @notes 定时任务列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @date 2022/3/29 14:30
     */
    public function lists(): array
    {
        $field = 'id,name,type,type as type_desc,command,params,expression,
        status,status as status_desc,error,last_time,time,max_time';

        $lists = Crontab::field($field)
            ->limit($this->limitOffset, $this->limitLength)
            ->order('id', 'desc')
            ->select()
            ->toArray();

        return $lists;
    }


    /**
     * @notes 定时任务数量
     * @return int
     * @date 2022/3/29 14:38
     */
    public function count(): int
    {
        return Crontab::count();
    }
}