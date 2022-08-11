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

namespace app\common\model\decorate;


use app\common\model\BaseModel;
use app\common\service\FileService;

class Navigation extends BaseModel
{
    protected $name = 'dev_navigation';


    /**
     * @notes 选中图标
     * @param $value
     * @param $data
     * @return string
     * @author ljj
     * @date 2022/2/23 10:26 上午
     */
    public function getSelectedIconAttr($value,$data)
    {
        return $value ? FileService::getFileUrl($value) : '';
    }

    /**
     * @notes 未选中图标
     * @param $value
     * @param $data
     * @return string
     * @author ljj
     * @date 2022/2/23 10:26 上午
     */
    public function getUnSelectedIconAttr($value,$data)
    {
        return $value ? FileService::getFileUrl($value) : '';
    }
}