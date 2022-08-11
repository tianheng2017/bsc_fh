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

namespace app\adminapi\controller\setting;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\setting\CustomerServiceLogic;

/**
 * 客服设置
 * Class CustomerServiceController
 * @package app\adminapi\controller\setting
 */
class CustomerServiceController extends BaseAdminController
{
    /**
     * @notes 获取客服设置
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/15 12:05 下午
     */
    public function getConfig()
    {
        $result = CustomerServiceLogic::getConfig();
        return $this->data($result);
    }

    /**
     * @notes 设置客服设置
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/15 12:11 下午
     */
    public function setConfig()
    {
        $params = $this->request->post();
        CustomerServiceLogic::setConfig($params);
        return $this->success('设置成功', [], 1, 1);
    }
}