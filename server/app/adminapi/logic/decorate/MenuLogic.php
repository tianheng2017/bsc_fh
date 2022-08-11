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


use app\common\enum\DefaultEnum;
use app\common\enum\MenuEnum;
use app\common\logic\BaseLogic;
use app\common\model\decorate\Menu;


/**
 * 菜单逻辑
 * Class MenuLogic
 * @package app\adminapi\logic\decorate
 */
class MenuLogic extends BaseLogic
{
    /**
     * @notes 添加菜单
     * @param $params
     * @return bool
     * @author ljj
     * @date 2022/2/14 3:05 下午
     */
    public function add($params)
    {
        Menu::create([
            'name' => $params['name'],
            'decorate_type' => MenuEnum::NAVIGATION_HOME,
            'image' => $params['image'] ?? '',
            'link_type' => $params['link_type'],
            'link_address' => $params['link_address'],
            'sort' => $params['sort'] ?: DefaultEnum::SORT,
            'status' => $params['status'],
        ]);

        return true;
    }

    /**
     * @notes 菜单详情
     * @param $id
     * @return array
     * @author ljj
     * @date 2022/2/14 3:28 下午
     */
    public function detail($id)
    {
        return Menu::where('id',$id)->findOrEmpty()->toArray();
    }

    /**
     * @notes 编辑菜单
     * @param $params
     * @return bool
     * @author ljj
     * @date 2022/2/14 3:34 下午
     */
    public function edit($params)
    {
        Menu::update([
            'name' => $params['name'],
            'decorate_type' => MenuEnum::NAVIGATION_HOME,
            'image' => $params['image'] ?? '',
            'link_type' => $params['link_type'],
            'link_address' => $params['link_address'],
            'sort' => $params['sort'] ?: DefaultEnum::SORT,
            'status' => $params['status'],
        ],['id'=>$params['id']]);

        return true;
    }

    /**
     * @notes 修改菜单状态
     * @param $params
     * @return bool
     * @author ljj
     * @date 2022/2/14 3:40 下午
     */
    public function status($params)
    {
        Menu::update(['status' => $params['status']],['id'=>$params['id']]);

        return true;
    }

    /**
     * @notes 删除菜单
     * @param $id
     * @return bool
     * @author ljj
     * @date 2022/2/14 3:58 下午
     */
    public function del($id)
    {
        Menu::destroy($id);

        return true;
    }

    /**
     * @notes 商城页面
     * @return array[]
     * @author ljj
     * @date 2022/2/16 10:19 上午
     */
    public function shopPage()
    {
        return MenuEnum::SHOP_PAGE;
    }


    /**
     * @notes 商品分类页面(一级)
     * @return array
     * @author 段誉
     * @date 2022/3/29 17:34
     */
    public function goodsCategoryPage()
    {
        return [];
    }
}
