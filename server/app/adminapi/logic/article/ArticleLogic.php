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
use app\common\model\article\Article;
use app\common\service\FileService;

/**
 * 资讯管理逻辑
 * Class ArticleLogic
 * @package app\adminapi\logic\article
 */
class ArticleLogic extends BaseLogic
{

    /**
     * @notes  添加资讯
     * @param array $params
     * @author heshihu
     * @date 2022/2/22 9:57
     */
    public static function add(array $params)
    {
        Article::create([
            'title' => $params['title'],
            'image' => $params['image'] ? FileService::setFileUrl($params['image']) : '',
            'cid' => $params['cid'],
            'is_show' => $params['is_show'],
            'content' => $params['content'] ?? '',
        ]);
    }


    /**
     * @notes  编辑资讯
     * @param array $params
     * @return bool
     * @author heshihu
     * @date 2022/2/22 10:12
     */
    public static function edit(array $params) : bool
    {
        try {
            Article::update([
                'id' => $params['id'],
                'title' => $params['title'],
                'image' => $params['image'] ? FileService::setFileUrl($params['image']) : '',
                'cid' => $params['cid'],
                'is_show' => $params['is_show'],
                'content' => $params['content'] ?? '',
            ]);
            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes  删除资讯
     * @param array $params
     * @author heshihu
     * @date 2022/2/22 10:17
     */
    public static function delete(array $params)
    {
        Article::destroy($params['id']);
    }

    /**
     * @notes  查看资讯详情
     * @param $params
     * @return array
     * @author heshihu
     * @date 2022/2/22 10:15
     */
    public static function detail($params) : array
    {
        return Article::findOrEmpty($params['id'])->toArray();
    }

    /**
     * @notes  更改资讯状态
     * @param array $params
     * @return bool
     * @author heshihu
     * @date 2022/2/22 10:18
     */
    public static function updateStatus(array $params)
    {
        Article::update([
            'id' => $params['id'],
            'is_show' => $params['is_show']
        ]);
        return true;
    }
}