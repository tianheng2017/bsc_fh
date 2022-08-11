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

namespace app\adminapi\controller\decorate;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\decorate\NavigationLists;
use app\adminapi\logic\decorate\NavigationLogic;
use app\adminapi\validate\decorate\NavigationValidate;

/**
 * 底部导航
 * Class NavigationController
 * @package app\adminapi\controller\decorate
 */
class NavigationController extends BaseAdminController
{
    /**
     * @notes 查看底部导航列表
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 10:14 上午
     */
    public function lists()
    {
        return $this->dataLists(new NavigationLists());
    }

    /**
     * @notes 查看底部导航详情
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 10:29 上午
     */
    public function detail()
    {
        $params = (new NavigationValidate())->get()->goCheck('detail');
        $result = (new NavigationLogic())->detail($params['id']);
        return $this->success('获取成功', $result);
    }

    /**
     * @notes 编辑底部导航
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 10:38 上午
     */
    public function edit()
    {
        $params = (new NavigationValidate())->post()->goCheck('edit');
        (new NavigationLogic())->edit($params);
        return $this->success('操作成功', [], 1, 1);
    }
}