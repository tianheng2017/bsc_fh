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

namespace app\adminapi\validate\article;

use app\common\validate\BaseValidate;
use app\common\model\article\ArticleCategory;
use app\common\model\article\Article;

/**
 * 资讯分类管理验证
 * Class ArticleCategoryValidate
 * @package app\adminapi\validate\article
 */
class ArticleCategoryValidate extends BaseValidate
{
    protected $rule = [
        'id' => 'require|checkArticleCategory',
        'name' => 'require|length:1,90',
        'is_show' => 'require|in:0,1',
        'sort' => 'egt:0',
    ];

    protected $message = [
        'id.require' => '资讯分类id不能为空',
        'name.require' => '资讯分类不能为空',
        'name.length' => '资讯分类长度须在1-90位字符',
        'sort.egt' => '排序值不正确',
    ];

    /**
     * @notes  添加场景
     * @return ArticleCategoryValidate
     * @author heshihu
     * @date 2022/2/10 15:11
     */
    public function sceneAdd()
    {
        return $this->remove(['id'])
            ->remove('id', 'require|checkArticleCategory');
    }

    /**
     * @notes  详情场景
     * @return ArticleCategoryValidate
     * @author heshihu
     * @date 2022/2/21 17:55
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

    /**
     * @notes  更改状态场景
     * @return ArticleCategoryValidate
     * @author heshihu
     * @date 2022/2/21 18:02
     */
    public function sceneStatus()
    {
        return $this->only(['id', 'is_show']);
    }

    public function sceneEdit()
    {
    }

    /**
     * @notes  获取所有资讯分类场景
     * @return ArticleCategoryValidate
     * @author heshihu
     * @date 2022/2/15 10:05
     */
    public function sceneSelect()
    {
        return $this->only(['type']);
    }


    /**
     * @notes  删除场景
     * @return ArticleCategoryValidate
     * @author heshihu
     * @date 2022/2/21 17:52
     */
    public function sceneDelete()
    {
        return $this->only(['id'])
            ->append('id', 'checkDeleteArticleCategory');
    }

    /**
     * @notes  检查指定资讯分类是否存在
     * @param $value
     * @return bool|string
     * @author heshihu
     * @date 2022/2/10 15:10
     */
    public function checkArticleCategory($value)
    {
        $article_category = ArticleCategory::findOrEmpty($value);
        if ($article_category->isEmpty()) {
            return '资讯分类不存在';
        }
        return true;
    }

    /**
     * @notes  删除时验证该资讯分类是否已使用
     * @param $value
     * @return bool|string
     * @author heshihu
     * @date 2022/2/22 14:45
     */
    public function checkDeleteArticleCategory($value)
    {
        $article = Article::where('cid', $value)->findOrEmpty();
        if (!$article->isEmpty()) {
            return '资讯分类已使用，请先删除绑定该资讯分类的资讯';
        }
        return true;
    }

}