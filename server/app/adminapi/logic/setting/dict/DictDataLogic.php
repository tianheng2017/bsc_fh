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
use app\common\model\dict\DictData;
use app\common\model\dict\DictType;


/**
 * 字典数据逻辑
 * Class DictDataLogic
 * @package app\adminapi\logic\DictData
 */
class DictDataLogic extends BaseLogic
{

    /**
     * @notes 添加编辑
     * @param array $params
     * @return DictData|\think\Model
     * @date 2022/6/20 17:13
     */
    public static function save(array $params)
    {
        $data = [
            'name' => $params['name'],
            'value' => $params['value'],
            'sort' => $params['sort'] ?? 0,
            'status' => $params['status'],
            'remark' => $params['remark'] ?? '',
        ];

        if (!empty($params['id'])) {
            return DictData::where(['id' => $params['id']])->update($data);
        } else {
            $dictType = DictType::findOrEmpty($params['type_id']);
            $data['type_id'] = $params['type_id'];
            $data['type_value'] = $dictType['type'];
            return DictData::create($data);
        }
    }


    /**
     * @notes 删除字典数据
     * @param array $params
     * @return bool
     * @date 2022/6/20 17:01
     */
    public static function delete(array $params)
    {
        return DictData::destroy($params['id']);
    }


    /**
     * @notes 获取字典数据详情
     * @param $params
     * @return array
     * @date 2022/6/20 17:01
     */
    public static function detail($params): array
    {
        return DictData::findOrEmpty($params['id'])->toArray();
    }


}