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

namespace app\adminapi\logic\article;

use app\common\logic\BaseLogic;
use app\common\model\article\ArticleCategory;

/**
 * 资讯分类管理逻辑
 * Class ArticleCategoryLogic
 * @package app\adminapi\logic\article
 */
class ArticleCategoryLogic extends BaseLogic
{

    /**
     * @notes  获取所有的资讯分类
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author heshihu
     * @date 2022/2/15 9:45
     */
    public static function selectArticleCategory() : array
    {
        return ArticleCategory::where('is_show', 1)
            ->field('id,name')
            ->order('id desc, sort asc')
            ->select()
            ->toArray();
    }

    /**
     * @notes  添加资讯分类
     * @param array $params
     * @author heshihu
     * @date 2022/2/18 10:17
     */
    public static function add(array $params)
    {
        ArticleCategory::create([
            'name' => $params['name'],
            'is_show' => $params['is_show'],
            'sort' => $params['sort']
        ]);
    }


    /**
     * @notes  编辑资讯分类
     * @param array $params
     * @return bool
     * @author heshihu
     * @date 2022/2/21 17:50
     */
    public static function edit(array $params) : bool
    {
        try {
            ArticleCategory::update([
                'id' => $params['id'],
                'name' => $params['name'],
                'is_show' => $params['is_show'],
                'sort' => $params['sort']
            ]);
            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes  删除资讯分类
     * @param array $params
     * @author heshihu
     * @date 2022/2/21 17:52
     */
    public static function delete(array $params)
    {
        ArticleCategory::destroy($params['id']);
    }

    /**
     * @notes  查看资讯分类详情
     * @param $params
     * @return array
     * @author heshihu
     * @date 2022/2/21 17:54
     */
    public static function detail($params) : array
    {
        return ArticleCategory::findOrEmpty($params['id'])->toArray();
    }

    /**
     * @notes  更改资讯分类状态
     * @param array $params
     * @return bool
     * @author heshihu
     * @date 2022/2/21 18:04
     */
    public static function updateStatus(array $params)
    {
        ArticleCategory::update([
            'id' => $params['id'],
            'is_show' => $params['is_show']
        ]);
        return true;
    }
}