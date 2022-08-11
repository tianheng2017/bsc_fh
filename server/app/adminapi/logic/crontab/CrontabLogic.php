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
namespace app\adminapi\logic\crontab;

use app\common\enum\CrontabEnum;
use app\common\logic\BaseLogic;
use app\common\model\Crontab;
use Cron\CronExpression;

/**
 * 定时任务逻辑层
 * Class CrontabLogic
 * @package app\adminapi\logic\crontab
 */
class CrontabLogic extends BaseLogic
{
    /**
     * @notes 添加定时任务
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/3/29 14:41
     */
    public static function add($params)
    {
        try {
            $params['remark'] = $params['remark'] ?? '';
            $params['params'] = $params['params'] ?? '';
            $params['last_time'] = time();

            Crontab::create($params);

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 查看定时任务详情
     * @param $params
     * @return array
     * @author 段誉
     * @date 2022/3/29 14:41
     */
    public static function detail($params)
    {
        $field = 'id,name,type,type as type_desc,command,params,status,status as status_desc,expression,remark';
        $crontab = Crontab::field($field)->findOrEmpty($params['id']);
        if ($crontab->isEmpty()) {
            return [];
        }
        return $crontab->toArray();
    }


    /**
     * @notes 编辑定时任务
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/3/29 14:42
     */
    public static function edit($params)
    {
        try {
            $params['remark'] = $params['remark'] ?? '';
            $params['params'] = $params['params'] ?? '';

            Crontab::update($params);

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 删除定时任务
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/3/29 14:42
     */
    public static function delete($params)
    {
        try {
            Crontab::destroy($params['id']);

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 操作定时任务
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/3/29 14:42
     */
    public static function operate($params)
    {
        try {
            $crontab = Crontab::findOrEmpty($params['id']);
            if ($crontab->isEmpty()) {
                throw new \think\Exception('定时任务不存在');
            }
            switch ($params['operate']) {
                case 'start';
                    $crontab->status = CrontabEnum::START;
                    break;
                case 'stop':
                    $crontab->status = CrontabEnum::STOP;
                    break;
            }
            $crontab->save();

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 获取规则执行时间
     * @param $params
     * @return array|string
     * @author 段誉
     * @date 2022/3/29 14:42
     */
    public static function expression($params)
    {
        try {
            $cron = new CronExpression($params['expression']);
            $result = $cron->getMultipleRunDates(5);
            $result = json_decode(json_encode($result), true);
            $lists = [];
            foreach ($result as $k => $v) {
                $lists[$k]['time'] = $k + 1;
                $lists[$k]['date'] = str_replace('.000000', '', $v['date']);
            }
            $lists[] = ['time' => 'x', 'date' => '……'];
            return $lists;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}