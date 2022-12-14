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

namespace app\adminapi\controller\article;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\article\ArticleCategoryLists;
use app\adminapi\logic\article\ArticleCategoryLogic;
use app\adminapi\validate\article\ArticleCategoryValidate;

/**
 * 资讯分类管理控制器
 * Class ArticleCategoryController
 * @package app\adminapi\controller\article
 */
class ArticleCategoryController extends BaseAdminController
{

    /**
     * @notes  查看资讯分类列表
     * @return \think\response\Json
     * @author heshihu
     * @date 2022/2/21 17:11
     */
    public function lists()
    {
        return $this->dataLists(new ArticleCategoryLists());
    }


    /**
     * @notes  获取所有的资讯分类
     * @return \think\response\Json
     * @author heshihu
     * @date 2022/2/21 18:12
     */
    public function selectArticleCategory()
    {
        return $this->data(ArticleCategoryLogic::selectArticleCategory());
    }


    /**
     * @notes  添加资讯分类
     * @return \think\response\Json
     * @author heshihu
     * @date 2022/2/21 17:31
     */
    public function add()
    {
        $params = (new ArticleCategoryValidate())->post()->goCheck('add');
        ArticleCategoryLogic::add($params);
        return $this->success('添加成功', [], 1, 1);
    }


    /**
     * @notes  编辑资讯分类
     * @return \think\response\Json
     * @author heshihu
     * @date 2022/2/21 17:49
     */
    public function edit()
    {
        $params = (new ArticleCategoryValidate())->post()->goCheck('edit');
        $result = ArticleCategoryLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(ArticleCategoryLogic::getError());
    }


    /**
     * @notes  删除资讯分类
     * @return \think\response\Json
     * @author heshihu
     * @date 2022/2/21 17:52
     */
    public function delete()
    {
        $params = (new ArticleCategoryValidate())->post()->goCheck('delete');
        ArticleCategoryLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes  资讯分类详情
     * @return \think\response\Json
     * @author heshihu
     * @date 2022/2/21 17:54
     */
    public function detail()
    {
        $params = (new ArticleCategoryValidate())->goCheck('detail');
        $result = ArticleCategoryLogic::detail($params);
        return $this->data($result);
    }


    /**
     * @notes  更改资讯分类状态
     * @return \think\response\Json
     * @author heshihu
     * @date 2022/2/21 10:15
     */
    public function updateStatus()
    {
        $params = (new ArticleCategoryValidate())->post()->goCheck('status');
        $result = ArticleCategoryLogic::updateStatus($params);
        if (true === $result) {
            return $this->success('修改成功', [], 1, 1);
        }
        return $this->fail(ArticleCategoryLogic::getError());
    }


}