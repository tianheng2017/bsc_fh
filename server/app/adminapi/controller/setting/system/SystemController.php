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

namespace app\adminapi\controller\setting\system;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\setting\system\SystemLogic;


/**
 * 系统维护
 * Class SystemController
 * @package app\adminapi\controller\setting\system
 */
class SystemController extends BaseAdminController
{

    /**
     * @notes 获取系统环境信息
     * @return \think\response\Json
     * @author 段誉
     * @date 2021/12/28 18:36
     */
    public function info()
    {
        $result = SystemLogic::getInfo();
        return $this->data($result);
    }


}