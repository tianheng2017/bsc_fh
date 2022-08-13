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
use app\adminapi\lists\TransferLogLists;
use app\adminapi\logic\TransferLogLogic;
use app\adminapi\validate\TransferLogValidate;


/**
 * TransferLog控制器
 * Class TransferLogController
 * @package app\adminapi\controller
 */
class TransferLogController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @date 2022/08/11 16:53
     */
    public function lists()
    {
        return $this->dataLists(new TransferLogLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @date 2022/08/11 16:53
     */
    // public function add()
    // {
        // $params = (new TransferLogValidate())->post()->goCheck('add');
        // $result = TransferLogLogic::add($params);
        // if (true === $result) {
            // return $this->success('添加成功', [], 1, 1);
        // }
        // return $this->fail(TransferLogLogic::getError());
    // }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @date 2022/08/11 16:53
     */
    // public function edit()
    // {
        // $params = (new TransferLogValidate())->post()->goCheck();
        // $result = TransferLogLogic::edit($params);
        // if (true === $result) {
            // return $this->success('编辑成功', [], 1, 1);
        // }
        // return $this->fail(TransferLogLogic::getError());
    // }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @date 2022/08/11 16:53
     */
    // public function delete()
    // {
        // $params = (new TransferLogValidate())->post()->goCheck('delete');
        // TransferLogLogic::delete($params);
        // return $this->success('删除成功', [], 1, 1);
    // }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @date 2022/08/11 16:53
     */
    public function detail()
    {
        $params = (new TransferLogValidate())->goCheck('detail');
        $result = TransferLogLogic::detail($params);
        return $this->data($result);
    }


}