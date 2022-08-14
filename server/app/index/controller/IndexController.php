<?php
namespace app\index\controller;

use app\BaseController;
use app\common\model\BaseModel;
use app\common\model\MoneyLog;
use app\common\model\Regpath;
use app\common\model\Users;
use app\common\model\Withdraw;
use app\common\service\JsonService;
use think\Exception;
use think\facade\Db;
use think\response\Json;
use tianheng2017\EthSign;
use Web3\Utils;

class IndexController extends BaseController
{
    /** 获取用户信息，不存在则注册用户
     * @return \think\response\Json|void
     */
    public function getUserInfo()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $rule = [
                'address|钱包地址'  =>  'require|alphaNum|length:42'
            ];
            $this->validate($post, $rule);

            if (!Utils::isAddress($post['address'])) {
                return JsonService::fail('钱包地址格式不正确');
            }

            try {
                $user = Users::where('address', $post['address'])->find();
                if (empty($user)) {
                    // 获取cookie保存的上级
                    $faddress = cookie('invite') ?? '';
                    if ($post['address'] == $faddress) {
                        // 上级 == 自己时，上级置为空
                        $faddress = '';
                    }
                    $user = Users::userCreate($post['address'], Users::address2id($faddress));
                }

                $user->amount1 = floatval($user->amount1);
                $user->amount2 = floatval($user->amount2);
                $performance = Regpath::getPerformance($user->id);
                $user->min = $performance[0];
                $user->max = $performance[1];
                $user->zhi = Regpath::where(['uid' => Users::address2id($user->address), 'level' => 1])->count();
                $user->san = Regpath::where(['uid' => Users::address2id($user->address)])->count();
                $user->first_leader = Users::id2address($user->fid);
                $user->invite_url = $this->request->domain().'/mobile?invite='.$user->address;

                // 控制输出字段
                $user->visible([
                    'id', 'address', 'amount1', 'amount2', 'min',
                    'max', 'zhi', 'san', 'first_leader', 'invite_url',
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
                'address|钱包地址'  =>  'require|alphaNum|length:42',
                'amount|提现金额'   =>  'require|float|gt:0',
                'msg|消息'          =>  'require',
                'sign|签名'         =>  'require',
            ];
            $this->validate($post, $rule);

            if (!Utils::isAddress($post['address'])) {
                return JsonService::fail('钱包地址格式不正确');
            }

            try {
                $result = (new EthSign())->verify($post['msg'], $post['sign'], $post['address']);
                if ($result === false) {
                    throw new Exception('鉴权失败');
                }
            } catch (\Exception $e) {
                return JsonService::fail($e->getMessage());
            }

            $user = Users::where('address', $post['address'])->find();
            if (empty($user)) {
                return JsonService::fail('用户不存在');
            }

            if ($user->amount2 <= 0 || $post['amount'] > $user->amount2) {
                return JsonService::fail('BNB收益不足');
            }

            Db::startTrans();
            try {
                // 扣款
                Users::where('address', $post['address'])
                    ->dec('amount2', $post['amount'])
                    ->update();
                // 资金日志
                MoneyLog::addLog(Users::address2id($post['address']), 1, $post['amount'], 3);

                // 插入提现申请表
                Withdraw::create([
                    'address'   =>  $post['address'],
                    'amount'    =>  $post['amount'],
                ]);

                Db::commit();
            } catch (Exception $e) {
                Db::rollback();
                return JsonService::fail($e->getMessage());
            }
            return JsonService::success('申请成功，等待审核', []);
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
                'address|钱包地址'  =>  'require|alphaNum|length:42',
            ];
            $this->validate($post, $rule);

            $post['address'] = strtolower($post['address']);
            $list = Withdraw::where('address', $post['address'])
                ->order('id', 'desc')
                ->field('id,status,amount,remark,create_time')
                ->limit(20)
                ->select();

            if ($list->isEmpty()) {
                return JsonService::fail('暂无记录');
            }

            foreach ($list as $k => $v) {
                $status_class = [0 => 'text-blue-600', 1 => 'text-green-600', 2 => 'text-red-600'];
                $list[$k]['status_class'] = $status_class[$v['status']];

                $status = [0 => '待审核', 1 => '已通过', 2 => '已拒绝'];
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
                'address|钱包地址'  =>  'require|alphaNum|length:42',
            ];
            $this->validate($post, $rule);

            $post['address'] = strtolower($post['address']);
            $list = MoneyLog::where('uid', Users::address2id($post['address']))
                ->order('id', 'desc')
                ->field('id,mtype,amount,create_time')
                ->limit(20)
                ->select();

            if ($list->isEmpty()) {
                return JsonService::fail('暂无记录');
            }

            foreach ($list as $k => $v) {
                $list[$k]['status'] = BaseModel::$mtype[$v['status']];
            }

            return JsonService::data($list->toArray());
        }
    }
}
