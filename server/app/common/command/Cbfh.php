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

        // 持币分红，加权，满足参与所需代币

        // 记录本次持币分红时间
        ConfigService::set('other', 'last_cbfh_time', time());
    }
}