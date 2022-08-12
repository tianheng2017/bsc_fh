<?php
namespace app\index\controller;

use app\BaseController;
use app\common\model\Regpath;
use app\common\model\Users;
use app\common\service\JsonService;
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
                    $faddress = cookie('ref');
                    if ($post['address'] == $faddress) {
                        // 上级 == 自己时，上级置为0
                        $faddress = '';
                    }
                    $user = Users::userCreate($post['address'], Users::address2id($faddress));
                }
                // 大小区业绩
                $user->performance = Regpath::getPerformance($user->id);
                // 控制输出字段
                $user->visible([
                    'id', 'address', 'amount1', 'amount2', 'performance',
                ]);
            } catch (\Exception $e) {
                return JsonService::fail($e->getMessage());
            }
            return JsonService::success('success', $user);
        }
    }
}
