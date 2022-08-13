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


namespace app\common\validate;

use think\facade\Config;

/**
 * 列表参数验证
 * Class ListsValidate
 * @package app\common\validate
 */
class ListsValidate extends BaseValidate
{
    protected $rule = [
        'page_no' => 'integer|gt:0',
        'page_size' => 'integer|gt:0|pageSizeMax',
        'page_start' => 'integer|gt:0',
        'page_end' => 'integer|gt:0|egt:page_start',
        'page_type' => 'in:0,1',
        'order_by' => 'in:desc,asc',
        'start_time' => 'date',
        'end_time' => 'date|gt:start_time',
        'start' => 'number',
        'end' => 'number',
        'export' => 'in:1,2',
    ];

    protected $message = [
        'page_end.egt' => '导出范围设置不正确，请重新选择',
        'end_time.gt' => '搜索的时间范围不正确',
    ];

    /**
     * @notes 查询数据量判断
     * @param $value
     * @param $rule
     * @param $data
     * @return bool
     * @date 2021/7/30 15:13
     */
    public function pageSizeMax($value, $rule, $data)
    {
        $pageSizeMax = Config::get('project.lists.page_size_max');
        if ($pageSizeMax < $value) {
            return '已超出系统限制数量，请分页查询或导出，' . '当前最多记录数为：' . $pageSizeMax;
        }
        return true;
    }


}