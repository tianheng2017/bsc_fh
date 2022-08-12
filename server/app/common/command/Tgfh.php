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

namespace app\common\command;

use app\common\model\MoneyLog;
use app\common\model\Regpath;
use app\common\model\TransferLog;
use app\common\model\Users;
use app\common\service\ConfigService;
use think\console\Command;
use think\console\Input;
use think\console\Output;

/**
 * 推广分红
 * Class Tgfh
 * @package app\command
 */
class Tgfh extends Command
{
    protected function configure()
    {
        $this->setName('tgfh')->setDescription('推广分红');
    }

    protected function execute(Input $input, Output $output)
    {
        // 上次推广分红时间
        $last_tgfh_time = (int)ConfigService::get('other', 'last_tgfh_time');
        if ($last_tgfh_time >= strtotime(date('Y-m-d'))) {
            $output->writeln(date('Y-m-d H:i:s').'：今日已经执行过推广分红了');
            return false;
        }

        // 获取今日BNB转入数量
        $amount = TransferLog::getTodayInAmount();
        if ($amount <= 0) {
            $output->writeln(date('Y-m-d H:i:s').'：今日无BNB转入');
            return false;
        }

        // 获取推广分红比例
        $cbfh_bl = (float)ConfigService::get('website', 'cbfh_bl');
        $tgfh_bl = 100 - $cbfh_bl;
        if ($tgfh_bl <= 0) {
            $output->writeln(date('Y-m-d H:i:s').'：推广分红比例必须大于0');
            return false;
        }

        // 参与所需代币
        $required_coin = (float)ConfigService::get('website', 'required_coin');

        // 全网业绩
        $all_yj = Users::where('amount1', '>=', $required_coin)->sum('amount1');
        // 查询有效用户(满足参与所需代币)
        $user_ids = Users::where('amount1', '>=', $required_coin)
            ->column('id');
        if (empty($user_ids)) {
            $output->writeln(date('Y-m-d H:i:s').'：暂无满足分红条件的用户');
            return false;
        }

        // 加权分红
        $num = 0;
        foreach ($user_ids as $v) {
            // 大小区业绩
            $performance = Regpath::getPerformance($v);
            // 推广分红
            $reward = round(($performance[0] / $all_yj) * $amount * $tgfh_bl / 100,4);
            if ($reward > 0) {
                // 资金入账
                Users::changeAmount($v, 2, $reward);
                // 资金日志
                MoneyLog::addLog($v, 0, $reward, 2);
                // 登记
                $num++;
            }
        }

        // 记录本次推广分红时间
        ConfigService::set('other', 'last_tgfh_time', time());

        $output->writeln(date('Y-m-d H:i:s').'：推广分红完毕，一共：'.$num.' 人，共分红：'.$reward.' BNB');
        return true;
    }
}