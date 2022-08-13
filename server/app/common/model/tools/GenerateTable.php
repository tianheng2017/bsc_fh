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

use app\common\enum\GeneratorEnum;
use app\common\model\BaseModel;


/**
 * 代码生成器-数据表信息模型
 * Class GenerateTable
 * @package app\common\model\tools
 */
class GenerateTable extends BaseModel
{

    protected $json = ['menu'];

    protected $jsonAssoc = true;

    /**
     * @notes 关联数据表字段
     * @return \think\model\relation\HasMany
     * @date 2022/6/15 10:46
     */
    public function tableColumn()
    {
        return $this->hasMany(GenerateColumn::class, 'table_id', 'id');
    }

    /**
     * @notes 模板类型描述
     * @param $value
     * @param $data
     * @return string|string[]
     * @date 2022/6/14 11:25
     */
    public function getTemplateTypeDescAttr($value, $data)
    {
        return GeneratorEnum::getTemplateTypeDesc($data['template_type']);
    }
}