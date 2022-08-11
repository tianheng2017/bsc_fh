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


interface ListsExcelInterface
{

    /**
     * @notes 设置导出字段
     * @return array
     * @author 令狐冲
     * @date 2021/7/21 16:04
     */
    public function setExcelFields(): array;


    /**
     * @notes 设置导出文件名
     * @return string
     * @author 令狐冲
     * @date 2021/7/26 17:47
     */
    public function setFileName():string;

}