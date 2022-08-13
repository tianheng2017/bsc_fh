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

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\WithdrawLists;
use app\adminapi\logic\WithdrawLogic;
use app\adminapi\validate\WithdrawValidate;

/**
 * Withdraw控制器
 * Class WithdrawController
 * @package app\adminapi\controller
 */
class WithdrawController extends BaseAdminController
{
    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @date 2022/08/12 23:49
     */
    public function lists()
    {
        return $this->dataLists(new WithdrawLists());
    }
    
    /**
     * @notes 审核
     * @return \think\response\Json
     * @date 2022/08/12 23:49
     */
    public function audit()
    {
        $params = (new WithdrawValidate())->post()->goCheck('audit');
        $result = WithdrawLogic::audit($params);
        if (true === $result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(WithdrawLogic::getError());
    }
    
    /**
     * @notes 删除
     * @return \think\response\Json
     * @date 2022/08/12 23:49
     */
    public function delete()
    {
        $params = (new WithdrawValidate())->post()->goCheck('delete');
        WithdrawLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @date 2022/08/12 23:49
     */
    public function detail()
    {
        $params = (new WithdrawValidate())->goCheck('detail');
        $result = WithdrawLogic::detail($params);
        return $this->data($result);
    }
}