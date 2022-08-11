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

use app\common\model\TransferLog;
use app\common\model\Users;
use app\common\service\ConfigService;
use think\console\Command;
use think\console\Input;
use think\console\Output;

/**
 * 持币分红
 * Class Cbfh
 * @package app\command
 */
class Cbfh extends Command
{
    protected function configure()
    {
        $this->setName('cbfh')
            ->setDescription('持币分红');
    }

    protected function execute(Input $input, Output $output)
    {
        // 上次持币分红时间
        $last_cbfh_time = (int)ConfigService::get('other', 'last_cbfh_time');
        if ($last_cbfh_time >= strtotime(date('Y-m-d'))) {
            $output->writeln('今日已经执行过持币分红了');
            return false;
        }

        // 获取今日BNB转入数量
        $amount = TransferLog::getTodayInAmount();
        if ($amount <= 0) {
            $output->writeln('今日无BNB转入');
            return false;
        }
        // 获取持币分红比例
        $cbfh_bl = (float)ConfigService::get('website', 'cbfh_bl');
        if ($cbfh_bl <= 0) {
            $output->writeln('持币分红比例必须大于0');
            return false;
        }

        // 参与所需代币
        $required_coin = (float)ConfigService::get('website', 'required_coin');
        // 查询分红有效用户(满足参与所需代币)
        $users = Users::where('amount1', '>=', $required_coin)
            ->field('id,amount1')
            ->select();
        if (empty($users)) {
            $output->writeln('暂无满足分红条件的用户');
            return false;
        }

        // 计算待分红金额
        $wait_amount = $amount * $cbfh_bl / 100;
        // 计算全体代币总额
        $all_amount = array_sum(array_column($users, 'amount1'));

        // 加权分红
        foreach ($users as $k => $v) {
            // 计算我的加权分红金额
            $reward = round($wait_amount * $v['amount1'] / $all_amount, 4);
            // 资金入账
            Users::changeAmount($v['id'], 1, $reward);
            // 资金日志
        }

        // 记录本次持币分红时间
        ConfigService::set('other', 'last_cbfh_time', time());
    }
}