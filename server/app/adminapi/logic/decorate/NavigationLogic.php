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

namespace app\adminapi\logic\decorate;


use app\common\logic\BaseLogic;
use app\common\model\decorate\Navigation;

class NavigationLogic extends BaseLogic
{
    /**
     * @notes 查看底部导航详情
     * @param $id
     * @return array
     * @author ljj
     * @date 2022/2/14 10:29 上午
     */
    public function detail($id)
    {
        return Navigation::where('id',$id)->findOrEmpty()->toArray();
    }

    /**
     * @notes 编辑底部导航
     * @param $params
     * @return bool
     * @author ljj
     * @date 2022/2/14 10:40 上午
     */
    public function edit($params)
    {
        Navigation::update([
            'name' => $params['name'],
            'selected_icon' => $params['selected_icon'],
            'un_selected_icon' => $params['un_selected_icon'],
            'selected_color' => $params['selected_color'],
            'un_selected_color' => $params['un_selected_color'],
        ],['id'=>$params['id']]);

        return true;
    }
}