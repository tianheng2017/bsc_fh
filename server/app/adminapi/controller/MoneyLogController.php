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
use app\adminapi\lists\MoneyLogLists;
use app\adminapi\logic\MoneyLogLogic;
use app\adminapi\validate\MoneyLogValidate;


/**
 * MoneyLog控制器
 * Class MoneyLogController
 * @package app\adminapi\controller
 */
class MoneyLogController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @date 2022/08/12 07:44
     */
    public function lists()
    {
        return $this->dataLists(new MoneyLogLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @date 2022/08/12 07:44
     */
    // public function add()
    // {
        // $params = (new MoneyLogValidate())->post()->goCheck('add');
        // $result = MoneyLogLogic::add($params);
        // if (true === $result) {
            // return $this->success('添加成功', [], 1, 1);
        // }
        // return $this->fail(MoneyLogLogic::getError());
    // }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @date 2022/08/12 07:44
     */
    // public function edit()
    // {
        // $params = (new MoneyLogValidate())->post()->goCheck();
        // $result = MoneyLogLogic::edit($params);
        // if (true === $result) {
            // return $this->success('编辑成功', [], 1, 1);
        // }
        // return $this->fail(MoneyLogLogic::getError());
    // }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @date 2022/08/12 07:44
     */
    // public function delete()
    // {
        // $params = (new MoneyLogValidate())->post()->goCheck('delete');
        // MoneyLogLogic::delete($params);
        // return $this->success('删除成功', [], 1, 1);
    // }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @date 2022/08/12 07:44
     */
    public function detail()
    {
        $params = (new MoneyLogValidate())->goCheck('detail');
        $result = MoneyLogLogic::detail($params);
        return $this->data($result);
    }


}