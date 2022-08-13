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

namespace app\common\model\tools;


use app\common\model\BaseModel;


/**
 * 代码生成器-数据表字段信息模型
 * Class GenerateColumn
 * @package app\common\model\tools
 */
class GenerateColumn extends BaseModel
{

    /**
     * @notes 关联table表
     * @return \think\model\relation\BelongsTo
     * @date 2022/6/15 18:59
     */
    public function generateTable()
    {
        return $this->belongsTo(GenerateTable::class, 'id', 'table_id');
    }
}