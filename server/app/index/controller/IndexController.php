<?php
namespace app\index\controller;

use app\BaseController;
use app\common\model\Users;
use app\common\service\JsonService;
use Web3\Utils;

class IndexController extends BaseController
{
    /** 获取用户信息，不存在则注册用户
     * @return \think\response\Json
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
                    $faddress = cookie('ref');

                    if ($post['address'] == $faddress) {
                        // 上级 == 自己时，上级置为0
                        $faddress = '';
                    }

                    $user = Users::userCreate($post['address'], Users::address2id($faddress));
                }

                // 团队等级
                $user->teamLevel = Users::getLevel($user->id);
                // 推广链接
                $user->invite_url = request()->domain().'/?ref='.$post['address'];
                // 抢单手续费
                $user->fee = (float)sysconfig('other','fee');
                // PIW质押获得云算力比例
                $user->pledge_get_bl = (float)sysconfig('other','pledge_get_bl');
                // 全网总云算力
                $user->all_amount5 = Users::sum('amount5');
                // 我的质押PIW
                $user->pledge_amount6 = Pledge::where(['address' => $user->address, 'status' => 0])->sum('amount');

                // 控制输出字段
                $user->visible([
                    'id', 'address', 'amount1', 'amount2', 'amount3', 'amount4', 'amount5',
                    'amount6','teamLevel', 'invite_url', 'fee', 'pledge_get_bl', 'all_amount5',
                    'pledge_amount6',
                ]);
            } catch (\Exception $e) {
                $this->error($e->getMessage());
            }

            $this->success('success', $user);
        }
    }
}
