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
use think\console\Command;
use think\console\Input;
use think\console\Output;

/**
 * 持币钱包收款记录采集
 * Class Caiji
 * @package app\command
 */
class Caiji extends Command
{
    protected function configure()
    {
        $this->setName('caiji')
            ->setDescription('持币钱包收款记录采集');
    }

    protected function execute(Input $input, Output $output)
    {
        $fh_wallet = strtolower('');
        $api_key = '';

        $url = 'https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=&address='.$fh_wallet.'&page=1&offset=100&startblock=0&endblock=999999999&sort=desc&apikey='.$api_key;
        $result = curl_get($url);

        if (!empty($result['result'])) {
            $arr = [];
            foreach ($result['result'] as $v) {
                $amount = bcdiv($v['value'], bcpow(10, $v['tokenDecimal']), 4);
                // 过滤收款记录
                if ($v['to'] <> $fh_wallet) continue;
                // 过滤已存在的
                if (TransferLog::where('tx', $v['hash'])->count()) continue;
                // 组装数据
                $arr[] = [
                    'tx'            =>  $v['hash'],
                    'symbol'        =>  $v['tokenSymbol'],
                    'from_address'  =>  $v['from'],
                    'to_address'    =>  $v['to'],
                    'amount'        =>  $amount,
                    'block_time'    =>  $v['timeStamp'],
                    'create_time'   =>  time(),
                    'status'        =>  1,
                    'state'         =>  1,
                ];
            }
            Db::name('transfer_log')->extra('IGNORE')->insertAll($arr);
        }
        $output->writeln(date('Y-m-d H:i:s').'：采集成功');
    }
}