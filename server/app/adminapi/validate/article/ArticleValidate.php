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
use app\common\model\article\Article;

/**
 * 资讯管理验证
 * Class ArticleValidate
 * @package app\adminapi\validate\article
 */
class ArticleValidate extends BaseValidate
{
    protected $rule = [
        'id' => 'require|checkArticle',
        'title' => 'require|length:1,255',
        'image' => 'require',
        'cid' => 'require',
        'is_show' => 'require|in:0,1',
    ];

    protected $message = [
        'id.require' => '资讯id不能为空',
        'title.require' => '资讯不能为空',
        'title.length' => '资讯长度须在1-255位字符',
        'image.require' => '封面图必须存在',
        'cid.require' => '所属分类必须存在',
    ];

    /**
     * @notes  添加场景
     * @return ArticleValidate
     * @author heshihu
     * @date 2022/2/22 9:57
     */
    public function sceneAdd()
    {
        return $this->remove(['id'])
            ->remove('id','require|checkArticle');
    }

    /**
     * @notes  详情场景
     * @return ArticleValidate
     * @author heshihu
     * @date 2022/2/22 10:15
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

    /**
     * @notes  更改状态场景
     * @return ArticleValidate
     * @author heshihu
     * @date 2022/2/22 10:18
     */
    public function sceneStatus()
    {
        return $this->only(['id', 'is_show']);
    }

    public function sceneEdit()
    {
    }

    /**
     * @notes  删除场景
     * @return ArticleValidate
     * @author heshihu
     * @date 2022/2/22 10:17
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }

    /**
     * @notes  检查指定资讯是否存在
     * @param $value
     * @return bool|string
     * @author heshihu
     * @date 2022/2/22 10:11
     */
    public function checkArticle($value)
    {
        $article = Article::findOrEmpty($value);
        if ($article->isEmpty()) {
            return '资讯不存在';
        }
        return true;
    }

}