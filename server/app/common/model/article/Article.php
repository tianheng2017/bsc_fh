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

namespace app\common\model\article;

use app\common\model\BaseModel;
use think\model\concern\SoftDelete;

/**
 * 资讯管理模型
 * Class Article
 * @package app\common\model\article;
 */
class Article extends BaseModel
{
    use SoftDelete;

    protected $deleteTime = 'delete_time';

    /**
     * @notes  获取分类名称
     * @param $value
     * @param $data
     * @return string
     * @author heshihu
     * @date 2022/2/22 9:53
     */
    public function getCateNameAttr($value, $data)
    {
        return ArticleCategory::where('id', $data['cid'])->value('name');
    }

}