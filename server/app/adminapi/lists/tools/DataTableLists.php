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

namespace app\adminapi\lists\tools;

use app\adminapi\lists\BaseAdminDataLists;
use think\facade\Db;


/**
 * 数据表列表
 * Class GeneratorLists
 * @package app\adminapi\lists\tools
 */
class DataTableLists extends BaseAdminDataLists
{

    /**
     * @notes 查询结果
     * @return mixed
     * @date 2022/6/13 18:54
     */
    public function queryResult()
    {
        $sql = 'SHOW TABLE STATUS WHERE 1=1 ';
        if (!empty($this->params['name'])) {
            $sql .= "AND name LIKE '%" . $this->params['name'] . "%'";
        }
        if (!empty($this->params['comment'])) {
            $sql .= "AND comment LIKE '%" . $this->params['comment'] . "%'";
        }
        return Db::query($sql);
    }


    /**
     * @notes 处理列表
     * @return array
     * @date 2022/6/13 18:54
     */
    public function lists(): array
    {
        $lists = array_map("array_change_key_case", $this->queryResult());
        $offset = max(0, ($this->pageNo - 1) * $this->pageSize);
        $lists = array_slice($lists, $offset, $this->pageSize, true);
        return array_values($lists);
    }


    /**
     * @notes 获取数量
     * @return int
     * @date 2022/6/13 18:54
     */
    public function count(): int
    {
        return count($this->queryResult());
    }

}