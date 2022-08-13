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
use app\adminapi\lists\UsersLists;
use app\adminapi\logic\UsersLogic;
use app\adminapi\validate\UsersValidate;


/**
 * Users控制器
 * Class UsersController
 * @package app\adminapi\controller
 */
class UsersController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @date 2022/08/11 10:48
     */
    public function lists()
    {
        return $this->dataLists(new UsersLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @date 2022/08/11 10:48
     */
    // public function add()
    // {
        // $params = (new UsersValidate())->post()->goCheck('add');
        // $result = UsersLogic::add($params);
        // if (true === $result) {
            // return $this->success('添加成功', [], 1, 1);
        // }
        // return $this->fail(UsersLogic::getError());
    // }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @date 2022/08/11 10:48
     */
    // public function edit()
    // {
        // $params = (new UsersValidate())->post()->goCheck();
        // $result = UsersLogic::edit($params);
        // if (true === $result) {
            // return $this->success('编辑成功', [], 1, 1);
        // }
        // return $this->fail(UsersLogic::getError());
    // }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @date 2022/08/11 10:48
     */
    // public function delete()
    // {
        // $params = (new UsersValidate())->post()->goCheck('delete');
        // UsersLogic::delete($params);
        // return $this->success('删除成功', [], 1, 1);
    // }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @date 2022/08/11 10:48
     */
    public function detail()
    {
        $params = (new UsersValidate())->goCheck('detail');
        $result = UsersLogic::detail($params);
        return $this->data($result);
    }


}