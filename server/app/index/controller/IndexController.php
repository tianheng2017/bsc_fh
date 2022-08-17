<?php
namespace app\index\controller;

use app\BaseController;
use app\common\model\BaseModel;
use app\common\model\MoneyLog;
use app\common\model\Regpath;
use app\common\model\TransferLog;
use app\common\model\Users;
use app\common\model\Withdraw;
use app\common\service\ConfigService;
use app\common\service\JsonService;
use think\Exception;
use think\facade\Db;
use think\response\Json;
use tianheng2017\EthSign;
use Web3\Utils;

class IndexController extends BaseController
{
    /** 注册|获取个人信息
     * @return Json|void
     */
    public function getUserInfo()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $rule = [
                'address'  =>  'require|alphaNum|length:42'
            ];
            $message = [
                'address.require'   =>  'address_require',
                'address.alphaNum'  =>  'address_alphaNum',
                'address.length'    =>  'address_length',
            ];
            $this->validate($post, $rule, $message);

            if (!Utils::isAddress($post['address'])) {
                return JsonService::fail('message.address_format_error');
            }

            try {
                $user = Users::where('address', $post['address'])->find();
                if (empty($user)) {
                    $faddress = cookie('invite') ?? '';
                    if ($post['address'] == $faddress) {
                        $faddress = '';
                    }
                    $user = Users::userCreate($post['address'], Users::address2id($faddress));
                }

                $required_coin = ConfigService::get('website', 'required_coin');
				
				$all_min_performance = 0;
				$user_ids = Users::column('id');
				foreach($user_ids as $v) {
					$all_min_performance += Regpath::getPerformance($v)[0];
				}

                $user->amount1 = floatval($user->amount1);
                $user->amount2 = floatval($user->amount2);
                $performance = Regpath::getPerformance($user->id);
                $user->min = $performance[0];
                $user->max = $performance[1];
                $user->my_sl = $user->amount1 > $required_coin ? $user->amount1 : 0;
                $user->all_sl = Users::where('amount1','>', $required_coin)->sum('amount1');
                $user->bd = $all_min_performance;
                $user->first_leader = Users::id2address($user->fid);
                $user->invite_url = $this->request->domain().'/?invite='.$user->address;
                $user->fh_wallet = ConfigService::get('website', 'fh_wallet');

                $user->visible([
                    'id', 'address', 'amount1', 'amount2', 'min',
                    'max', 'my_sl', 'all_sl', 'bd', 'first_leader',
                    'invite_url', 'fh_wallet',
                ]);
            } catch (\Exception $e) {
                return JsonService::fail($e->getMessage());
            }
            return JsonService::data($user->toArray());
        }
    }

    /** 提现
     * @return void|Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function doWithdraw()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $rule = [
                'address'  =>  'require|alphaNum|length:42',
                'amount'   =>  'require|float|gt:0',
                'msg'      =>  'require',
                'sign'     =>  'require',
            ];
            $message = [
                'address.require'   =>  'address_require',
                'address.alphaNum'  =>  'address_alphaNum',
                'address.length'    =>  'address_length',
                'amount.require'    =>  'amount_require',
                'amount.float'      =>  'amount_float',
                'amount.gt'         =>  'amount_gt',
                'msg.require'       =>  'msg_require',
                'sign.require'      =>  'sign_require',
            ];
            $this->validate($post, $rule, $message);

            if (!Utils::isAddress($post['address'])) {
                return JsonService::fail('message.address_format_error');
            }

            try {
                $result = (new EthSign())->verify($post['msg'], $post['sign'], $post['address']);
                if ($result === false) {
                    throw new Exception('message.auth_failed');
                }
            } catch (\Exception $e) {
                return JsonService::fail($e->getMessage());
            }

            $user = Users::where('address', $post['address'])->find();
            if (empty($user)) {
                return JsonService::fail('message.user_none');
            }

            if ($user->amount2 <= 0 || $post['amount'] > $user->amount2) {
                return JsonService::fail('message.bnb_lacking');
            }

            Db::startTrans();
            try {
                Users::where('address', $post['address'])
                    ->dec('amount2', $post['amount'])
                    ->update();

                MoneyLog::addLog(Users::address2id($post['address']), 1, $post['amount'], 3);

                Withdraw::create([
                    'address'   =>  $post['address'],
                    'amount'    =>  $post['amount'],
                ]);

                Db::commit();
            } catch (Exception $e) {
                Db::rollback();
                return JsonService::fail($e->getMessage());
            }
            return JsonService::success('message.wait_review', []);
        }
    }

    /** 获取提现记录
     * @return Json|void
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getWithdrawList()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $rule = [
                'address'  =>  'require|alphaNum|length:42',
            ];
            $message = [
                'address.require'   =>  'address_require',
                'address.alphaNum'  =>  'address_alphaNum',
                'address.length'    =>  'address_length',
            ];
            $this->validate($post, $rule, $message);

            $post['address'] = strtolower($post['address']);
            $list = Withdraw::where('address', $post['address'])
                ->order('id', 'desc')
                ->field('id,status,amount,remark,create_time')
                ->limit(20)
                ->select();

            if ($list->isEmpty()) {
                return JsonService::fail('message.no_record');
            }

            foreach ($list as $k => $v) {
                $status_class = [0 => 'text-blue-600', 1 => 'text-green-600', 2 => 'text-red-600'];
                $list[$k]['status_class'] = $status_class[$v['status']];

                $status = [0 => 'message.status0', 1 => 'message.status1', 2 => 'message.status2'];
                $list[$k]['status'] = $status[$v['status']];
                $list[$k]['amount'] = floatval($v['amount']);
            }

            return JsonService::data($list->toArray());
        }
    }

    /** 获取资金明细
     * @return Json|void
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getMoneyLog()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $rule = [
                'address'  =>  'require|alphaNum|length:42',
            ];
            $message = [
                'address.require'   =>  'address_require',
                'address.alphaNum'  =>  'address_alphaNum',
                'address.length'    =>  'address_length',
            ];
            $this->validate($post, $rule, $message);

            $post['address'] = strtolower($post['address']);
            $list = MoneyLog::where('uid', Users::address2id($post['address']))
                ->order('id', 'desc')
                ->field('id,mtype,amount,create_time')
                ->limit(20)
                ->select();

            if ($list->isEmpty()) {
                return JsonService::fail('message.no_record');
            }

            foreach ($list as $k => $v) {
                $list[$k]['status'] = BaseModel::$mtype[$v['status']];
            }

            return JsonService::data($list->toArray());
        }
    }
}
