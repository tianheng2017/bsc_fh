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

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\channel\OfficialAccountMenuLogic;
use app\adminapi\validate\channel\OfficialAccountMenuValidate;

/**
 * 微信公众号菜单控制器
 * Class OfficialAccountMenuController
 * @package app\adminapi\controller\channel
 */
class OfficialAccountMenuController extends BaseAdminController
{

    /**
     * @notes 保存菜单
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/3/29 10:41
     */
    public function save()
    {
        $params = (new OfficialAccountMenuValidate())->post()->goCheck();
        $result = OfficialAccountMenuLogic::save($params);
        if(false === $result) {
            return $this->fail(OfficialAccountMenuLogic::getError());
        }
        return $this->success('保存成功',[],1,1);
    }


    /**
     * @notes 保存发布菜单
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/3/29 10:42
     */
    public function saveAndPublish()
    {
        $params = (new OfficialAccountMenuValidate())->post()->goCheck();
        $result = OfficialAccountMenuLogic::saveAndPublish($params);
        if($result) {
            return $this->success('保存并发布成功',[],1,1);
        }
        return $this->fail(OfficialAccountMenuLogic::getError());
    }



    /**
     * @notes 查看菜单详情
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/3/29 10:42
     */
    public function detail()
    {
        $result = OfficialAccountMenuLogic::detail();
        return $this->data($result);
    }
}