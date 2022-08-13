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

namespace app\adminapi\logic\dept;

use app\common\logic\BaseLogic;
use app\common\model\article\Article;
use app\common\model\dept\Jobs;
use app\common\service\FileService;


/**
 * 岗位管理逻辑
 * Class JobsLogic
 * @package app\adminapi\logic\dept
 */
class JobsLogic extends BaseLogic
{


    /**
     * @notes 新增岗位
     * @param array $params
     * @date 2022/5/26 9:58
     */
    public static function add(array $params)
    {
        Jobs::create([
            'name' => $params['name'],
            'code' => $params['code'],
            'sort' => $params['sort'] ?? 0,
            'status' => $params['status'],
            'remark' => $params['remark'] ?? '',
        ]);
    }


    /**
     * @notes 编辑岗位
     * @param array $params
     * @return bool
     * @date 2022/5/26 9:58
     */
    public static function edit(array $params) : bool
    {
        try {
            Jobs::update([
                'id' => $params['id'],
                'name' => $params['name'],
                'code' => $params['code'],
                'sort' => $params['sort'] ?? 0,
                'status' => $params['status'],
                'remark' => $params['remark'] ?? '',
            ]);
            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 删除岗位
     * @param array $params
     * @date 2022/5/26 9:59
     */
    public static function delete(array $params)
    {
        Jobs::destroy($params['id']);
    }


    /**
     * @notes 获取岗位详情
     * @param $params
     * @return array
     * @date 2022/5/26 9:59
     */
    public static function detail($params) : array
    {
        return Jobs::findOrEmpty($params['id'])->toArray();
    }


}