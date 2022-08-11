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

declare (strict_types=1);

namespace app\adminapi\controller;

use think\App;
use app\common\controller\BaseLikeAdminController;

/**
 * 管理元控制器基类
 * Class BaseAdminController
 * @package app\adminapi\controller
 */
class BaseAdminController extends BaseLikeAdminController
{
    protected int $adminId = 0;
    protected array $adminInfo = [];

    public function initialize()
    {
        if (isset($this->request->adminInfo) && $this->request->adminInfo) {
            $this->adminInfo = $this->request->adminInfo;
            $this->adminId = $this->request->adminInfo['admin_id'];
        }
    }

}