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

namespace app\adminapi\controller\setting\dict;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\setting\dict\DictTypeLists;
use app\adminapi\logic\setting\dict\DictTypeLogic;
use app\adminapi\validate\dict\DictTypeValidate;


/**
 * 字典类型
 * Class DictTypeController
 * @package app\adminapi\controller\dict
 */
class DictTypeController extends BaseAdminController
{

    /**
     * @notes 获取字典类型列表
     * @return \think\response\Json
     * @date 2022/6/20 15:50
     */
    public function lists()
    {
        return $this->dataLists(new DictTypeLists());
    }


    /**
     * @notes 添加字典类型
     * @return \think\response\Json
     * @date 2022/6/20 16:24
     */
    public function add()
    {
        $params = (new DictTypeValidate())->post()->goCheck('add');
        DictTypeLogic::add($params);
        return $this->success('添加成功', [], 1, 1);
    }


    /**
     * @notes 编辑字典类型
     * @return \think\response\Json
     * @date 2022/6/20 16:25
     */
    public function edit()
    {
        $params = (new DictTypeValidate())->post()->goCheck('edit');
        DictTypeLogic::edit($params);
        return $this->success('编辑成功', [], 1, 1);
    }


    /**
     * @notes 删除字典类型
     * @return \think\response\Json
     * @date 2022/6/20 16:25
     */
    public function delete()
    {
        $params = (new DictTypeValidate())->post()->goCheck('delete');
        DictTypeLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取字典详情
     * @return \think\response\Json
     * @date 2022/6/20 16:25
     */
    public function detail()
    {
        $params = (new DictTypeValidate())->goCheck('detail');
        $result = DictTypeLogic::detail($params);
        return $this->data($result);
    }


}