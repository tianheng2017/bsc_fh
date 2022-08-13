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


interface ListsSortInterface
{

    /**
     * @notes 设置支持排序字段
     * @return array
     * @date 2021/7/7 19:44
     */
    public function setSortFields(): array;

    /**
     * @notes 设置默认排序条件
     * @return array
     * @date 2021/7/16 00:01
     */
    public function setDefaultOrder():array;

}