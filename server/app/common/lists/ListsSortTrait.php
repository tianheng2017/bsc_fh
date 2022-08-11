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


namespace app\common\lists;


trait ListsSortTrait
{

    protected string $orderBy;
    protected string $field;

    /**
     * @notes 生成排序条件
     * @param $sortField
     * @param $defaultOrder
     * @return array|string[]
     * @author 令狐冲
     * @date 2021/7/16 00:06
     */
    private function createOrder($sortField, $defaultOrder)
    {
        if (empty($sortField) || empty($this->orderBy) || empty($this->field) || !in_array($this->field, array_keys($sortField))) {
            return $defaultOrder;
        }

        if (isset($sortField[$this->field])) {
            $field = $sortField[$this->field];
        } else {
            return $defaultOrder;
        }

        if ($this->orderBy = 'desc') {
            return [$field => 'desc'];
        }
        if ($this->orderBy = 'asc') {
            return [$field => 'asc'];
        }
        return $defaultOrder;
    }
}