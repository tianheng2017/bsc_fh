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

namespace app\common\enum;


class GeneratorEnum
{

    // 模板类型
    const TEMPLATE_TYPE_SINGLE = 0;// 单表
    const TEMPLATE_TYPE_TREE = 1; // 树表

    // 生成方式
    const GENERATE_TYPE_ZIP = 0; // 压缩包下载
    const GENERATE_TYPE_MODULE = 1; // 生成到模块


    /**
     * @notes 获取模板类型描述
     * @param bool $value
     * @return string|string[]
     * @date 2022/6/14 11:24
     */
    public static function getTemplateTypeDesc($value = true)
    {
        $data = [
            self::TEMPLATE_TYPE_SINGLE => '单表(增删改查)',
            self::TEMPLATE_TYPE_TREE => '树表(增删改查)',
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value] ?? '';
    }
}