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
use app\adminapi\lists\setting\dict\DictDataLists;
use app\adminapi\logic\setting\dict\DictDataLogic;
use app\adminapi\validate\dict\DictDataValidate;


/**
 * 字典数据
 * Class DictDataController
 * @package app\adminapi\controller\dictionary
 */
class DictDataController extends BaseAdminController
{

    /**
     * @notes 获取字典数据列表
     * @return \think\response\Json
     * @date 2022/6/20 16:35
     */
    public function lists()
    {
        return $this->dataLists(new DictDataLists());
    }


    /**
     * @notes 添加字典数据
     * @return \think\response\Json
     * @date 2022/6/20 17:13
     */
    public function add()
    {
        $params = (new DictDataValidate())->post()->goCheck('add');
        DictDataLogic::save($params);
        return $this->success('添加成功', [], 1, 1);
    }


    /**
     * @notes 编辑字典数据
     * @return \think\response\Json
     * @date 2022/6/20 17:13
     */
    public function edit()
    {
        $params = (new DictDataValidate())->post()->goCheck('edit');
        DictDataLogic::save($params);
        return $this->success('编辑成功', [], 1, 1);
    }


    /**
     * @notes 删除字典数据
     * @return \think\response\Json
     * @date 2022/6/20 17:13
     */
    public function delete()
    {
        $params = (new DictDataValidate())->post()->goCheck('id');
        DictDataLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取字典详情
     * @return \think\response\Json
     * @date 2022/6/20 17:14
     */
    public function detail()
    {
        $params = (new DictDataValidate())->goCheck('id');
        $result = DictDataLogic::detail($params);
        return $this->data($result);
    }


}