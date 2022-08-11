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

namespace app\adminapi\logic\setting\dict;

use app\common\logic\BaseLogic;
use app\common\model\dict\DictType;


/**
 * 字典类型逻辑
 * Class DictTypeLogic
 * @package app\adminapi\logic\dict
 */
class DictTypeLogic extends BaseLogic
{

    /**
     * @notes 添加字典类型
     * @param array $params
     * @return DictType|\think\Model
     * @author 段誉
     * @date 2022/6/20 16:08
     */
    public static function add(array $params)
    {
        return DictType::create([
            'name' => $params['name'],
            'type' => $params['type'],
            'status' => $params['status'],
            'remark' => $params['remark'] ?? '',
        ]);
    }


    /**
     * @notes 编辑字典类型
     * @param array $params
     * @author 段誉
     * @date 2022/6/20 16:10
     */
    public static function edit(array $params)
    {
        return DictType::update([
            'id' => $params['id'],
            'name' => $params['name'],
            'type' => $params['type'],
            'status' => $params['status'],
            'remark' => $params['remark'] ?? '',
        ]);
    }


    /**
     * @notes 删除字典类型
     * @param array $params
     * @author 段誉
     * @date 2022/6/20 16:23
     */
    public static function delete(array $params)
    {
        DictType::destroy($params['id']);
    }


    /**
     * @notes 获取字典详情
     * @param $params
     * @return array
     * @author 段誉
     * @date 2022/6/20 16:23
     */
    public static function detail($params): array
    {
        return DictType::findOrEmpty($params['id'])->toArray();
    }
}