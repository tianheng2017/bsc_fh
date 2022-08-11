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
use app\adminapi\lists\setting\system\LogLists;

/**
 * 系统日志
 * Class LogController
 * @package app\adminapi\controller\setting\system
 */
class LogController extends BaseAdminController
{
    /**
     * @notes 查看系统日志列表
     * @return \think\response\Json
     * @author ljj
     * @date 2021/8/3 4:25 下午
     */
    public function lists()
    {
        return $this->dataLists(new LogLists());
    }
}