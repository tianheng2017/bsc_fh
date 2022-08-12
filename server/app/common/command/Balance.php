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
use app\common\model\TransferLog;
use app\common\model\Users;
use app\common\service\ConfigService;
use app\common\service\Web3Service;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\facade\Db;

/**
 * 代币余额快照
 * Class Balance
 * @package app\command
 */
class Balance extends Command
{
    protected function configure()
    {
        $this->setName('balance')
            ->setDescription('代币余额快照');
    }

    protected function execute(Input $input, Output $output)
    {
        $output->writeln(date('Y-m-d H:i:s').'：代币余额快照开始');

        // 统计用户
        $users = Users::field('id,address')->select();
        if ($users->isEmpty()) {
            $output->writeln(date('Y-m-d H:i:s').'：暂无用户');
            return false;
        }

        // 依次快照
        foreach ($users as $v) {
            // 查询余额
            $balance = (new Web3Service())->getBalance(['address' => $v['id']]);
            // 更新余额
            Users::where('id', $v['id'])->update(['amount2' => $balance]);
        }

        $output->writeln(date('Y-m-d H:i:s').'：代币余额快照结束');
        return true;
    }
}