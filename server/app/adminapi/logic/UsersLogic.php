<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\adminapi\logic;


use app\common\model\Users;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * Users逻辑
 * Class UsersLogic
 * @package app\adminapi\logic
 */
class UsersLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2022/08/11 00:52
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            Users::create([

            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 编辑
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2022/08/11 00:52
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            Users::update([
                'id' => $params['id'],
                'amount1' => $params['amount1'],
                'amount2' => $params['amount2'],
            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 删除
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2022/08/11 00:52
     */
    public static function delete(array $params): bool
    {
        return Users::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2022/08/11 00:52
     */
    public static function detail($params): array
    {
        return Users::findOrEmpty($params['id'])->toArray();
    }
}