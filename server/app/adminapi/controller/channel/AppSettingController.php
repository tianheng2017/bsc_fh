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

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\channel\AppSettingLogic;

/**
 * APP设置控制器
 * Class AppSettingController
 * @package app\adminapi\controller\settings\app
 */
class AppSettingController extends BaseAdminController
{

    /**
     * @notes 获取App设置
     * @return \think\response\Json
     * @date 2022/3/29 10:24
     */
    public function getConfig()
    {
        $result = AppSettingLogic::getConfig();
        return $this->data($result);
    }


    /**
     * @notes App设置
     * @return \think\response\Json
     * @date 2022/3/29 10:25
     */
    public function setConfig()
    {
        $params = $this->request->post();
        AppSettingLogic::setConfig($params);
        return $this->success('操作成功', [], 1, 1);
    }
}