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

namespace app\common\model\ad;


use app\common\enum\DefaultEnum;
use app\common\model\BaseModel;
use think\model\concern\SoftDelete;

class AdPosition extends BaseModel
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';


    /**
     * @notes 状态
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2022/2/14 4:38 下午
     */
    public function getStatusDescAttr($value,$data)
    {
        return DefaultEnum::getEnableDesc($data['status']);
    }

    /**
     * @notes 属性
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2022/2/14 4:42 下午
     */
    public function getAttrDescAttr($value,$data)
    {
        return DefaultEnum::getAttrDesc($data['attr']);
    }
}