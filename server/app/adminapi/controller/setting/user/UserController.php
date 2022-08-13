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
namespace app\adminapi\controller\setting\user;

use app\adminapi\{
    controller\BaseAdminController,
    logic\setting\user\UserLogic,
    validate\setting\UserConfigValidate
};


/**
 * 设置-用户设置控制器
 * Class UserController
 * @package app\adminapi\controller\config
 */
class UserController extends BaseAdminController
{

    /**
     * @notes 获取用户设置
     * @return \think\response\Json
     * @date 2022/3/29 10:08
     */
    public function getConfig()
    {
        $result = (new UserLogic())->getConfig();
        return $this->data($result);
    }


    /**
     * @notes 设置用户设置
     * @return \think\response\Json
     * @date 2022/3/29 10:08
     */
    public function setConfig()
    {
        $params = (new UserConfigValidate())->post()->goCheck('user');
        (new UserLogic())->setConfig($params);
        return $this->success('操作成功', [], 1, 1);
    }


    /**
     * @notes 获取注册配置
     * @return \think\response\Json
     * @date 2022/3/29 10:08
     */
    public function getRegisterConfig()
    {
        $result = (new UserLogic())->getRegisterConfig();
        return $this->data($result);
    }


    /**
     * @notes 设置注册配置
     * @return \think\response\Json
     * @date 2022/3/29 10:08
     */
    public function setRegisterConfig()
    {
        $params = (new UserConfigValidate())->post()->goCheck('register');
        (new UserLogic())->setRegisterConfig($params);
        return $this->success('操作成功', [], 1, 1);
    }

}