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

namespace app\common\model\ad;


use app\common\enum\AdEnum;
use app\common\enum\MenuEnum;
use app\common\model\BaseModel;
use app\common\model\goods\Goods;
use think\model\concern\SoftDelete;

class Ad extends BaseModel
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';

    /**
     * @notes 链接地址
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2022/2/14 6:25 下午
     */
    public function getLinkAddressDescAttr($value,$data)
    {
        $address = AdEnum::getLinkDesc($data['link_type']);
        if ($data['link_type'] == AdEnum::LINK_CUSTOM) {
            $address = $address.':'.$data['link_address'];
        }elseif ($data['link_type'] == AdEnum::LINK_SHOP) {
            $shop_page = array_column(MenuEnum::SHOP_PAGE,NULL,'index');
            $address = $address.':'.$shop_page[$data['link_address']]['name'];
        }elseif ($data['link_type'] == AdEnum::LINK_GOODS) {
            $goods_name = Goods::where('id',$data['link_address'])->value('name');
            $address = $address.':'.$goods_name;
        }
        return $address;
    }

    /**
     * @notes 广告位名称
     * @param $value
     * @param $data
     * @return mixed
     * @author ljj
     * @date 2022/2/14 6:37 下午
     */
    public function getApNameAttr($value,$data)
    {
        return AdPosition::where('id',$data['pid'])->value('name');
    }
}
