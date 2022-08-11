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

namespace app\common\model;

use think\facade\Db;


/**
 * Regpath模型
 * Class Regpath
 * @package app\common\model
 */
class Regpath extends BaseModel
{

    protected $name = 'regpath';

    /**
     * @notes 处理注册关系
     * @param int $uid 用户ID
     * @param int $fid 上级ID
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @date 2022/3/28 11:51
     */
    public static function addRegpath(int $uid, int $fid)
    {
        if (!empty($fid)) {
            //查询上级的注册关系
            $data = self::where('member_uid', $fid)->field('uid,member_uid,level')->select();
            //根据上级的关系，设置我的注册关系
            foreach($data as &$v){
                $v['member_uid']    = $uid;
                $v['level']         += 1;
                $v['create_time']   =  time();
            }
            //追加我与上级的关系
            $data[] = [
                'uid'               =>  $fid,
                'member_uid'        =>  $uid,
                'level'             =>  1,
                'create_time'       =>  time(),
            ];
            //入库
            Db::name('regpath')->extra('IGNORE')->insertAll($data->toArray());
        }
        return true;
    }

    /**
     * @notes 注册关系
     * @return array tree数据
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @date 2022/3/28 11:51
     */
    public static function getTree()
    {
        $list = Users::field('id,fid as pid,address as title,count')->select();
        foreach ($list as &$v) {
            $performance = self::getPerformance($v->id);
            $v->title .= '（ID：'.$v->id.'，已分红：'.$v->count.'次，小区：'.$performance[0].'，大区：'.$performance[1].'）';
        }
        $tree = list2tree($list->toArray());
        return $tree;
    }

    /**
     * @notes 查询某会员的某级下线人员
     * @param int $uid 用户ID
     * @param int $level 第几层
     * @return array 本层会员ID组
     * @date 2022/3/28 11:51
     */
    public static function getLevelUids(int $uid, int $level)
    {
        return self::where(['uid' => $uid, 'level' => $level])->column('member_uid');
    }

    /**
     * @notes 查询某会员的所有下线人员
     * @param int $uid 用户ID
     * @return array 下线会员ID组
     * @date 2022/3/28 11:51
     */
    public static function getAllChilds(int $uid)
    {
        return self::where('uid', $uid)->column('member_uid');
    }

    /**
     * @notes 查询用户所有直线上级
     * @param int $uid 用户ID
     * @return array 上级ID组
     * @date 2022/3/28 11:52
     */
    public static function getAllParents(int $uid)
    {
        $list = [];
        $temp = $uid;
        do {
            $parent = self::where(['member_uid' => $temp, 'level' => 1])->value('uid');
            if (!empty($parent)) {
                $temp = $parent;
                array_push($list, $parent);
            }
        }while($parent);
        return $list;
    }

    /** 获取大小区业绩
     * @param int $uid 用户ID
     * @return array|int[] [小区业绩, 大区业绩]
     */
    public static function getPerformance(int $uid)
    {
        // 查询直推
        $zhi_uids = self::getLevelUids($uid, 1);
        if (empty($zhi_uids)) return [0, 0];

        // 分别查询各个直推的伞下业绩
        $arr = [];
        foreach ($zhi_uids as $v) {
            // 查询伞下会员
            $children_uids = self::getAllChilds($v);
            // 包括直推自己
            array_push($children_uids, $v);
            // 去重
            $children_uids = array_unique($children_uids);

            // 团队业绩按BNB余额计算
            $all_amount = Users::whereIn('id', $children_uids)->sum('amount1');
            $arr[] = [
                'uid'           =>  $v,
                'all_amount'    =>  $all_amount,
            ];
        }

        // 筛选大区索引
        $max = 0;
        foreach ($arr as $k => $v) {
            if ($v['all_amount'] >= $arr[$max]['all_amount']) $max = $k;
        }

        // 小区业绩
        $maxPerformance = $arr[$max]['all_amount'];

        // 去掉一个大区
        unset($arr[$max]);
        if (empty($arr)) return [0, $maxPerformance];

        // 小区业绩
        $minPerformance = array_sum(array_column($arr, 'all_amount'));

        return [$minPerformance, $maxPerformance];
    }
}