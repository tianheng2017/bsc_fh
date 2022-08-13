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

namespace app\adminapi\controller;

use app\adminapi\logic\LoginLogic;
use app\adminapi\validate\LoginValidate;

/**
 * 管理员登录控制器
 * Class LoginController
 * @package app\adminapi\controller
 */
class LoginController extends BaseAdminController
{
    public array $notNeedLogin = ['account', 'logout'];

    /**
     * @notes 账号登录
     * @date 2021/6/30 17:01
     * @return \think\response\Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function account()
    {
        $params = (new LoginValidate())->post()->goCheck();
        return $this->data((new LoginLogic())->login($params));
    }

    /**
     * @notes 退出登录
     * @return \think\response\Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @date 2021/7/8 00:36
     */
    public function logout()
    {
        //退出登录情况特殊，只有成功的情况，也不需要token验证
        (new LoginLogic())->logout($this->adminInfo);
        return $this->success();
    }
}