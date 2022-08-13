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
use app\adminapi\logic\channel\H5SettingLogic;
use app\adminapi\validate\channel\H5SettingValidate;

/**
 * H5设置控制器
 * Class HFiveSettingController
 * @package app\adminapi\controller\settings\h5
 */
class H5SettingController extends BaseAdminController
{

    /**
     * @notes 获取H5设置
     * @return \think\response\Json
     * @date 2022/3/29 10:36
     */
    public function getConfig()
    {
        $result = H5SettingLogic::getConfig();
        return $this->data($result);
    }


    /**
     * @notes H5设置
     * @return \think\response\Json
     * @date 2022/3/29 10:36
     */
    public function setConfig()
    {
        $params = (new H5SettingValidate())->post()->goCheck();
        H5SettingLogic::setConfig($params);
        return $this->success('操作成功', [], 1, 1);
    }
}