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
use app\adminapi\logic\channel\OfficialAccountSettingLogic;
use app\adminapi\validate\channel\OfficialAccountSettingValidate;

/**
 * 公众号设置
 * Class OfficialAccountSettingController
 * @package app\adminapi\controller\channel
 */
class OfficialAccountSettingController extends BaseAdminController
{
    /**
     * @notes 获取公众号配置
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/16 10:09 上午
     */
    public function getConfig()
    {
        $result = (new OfficialAccountSettingLogic())->getConfig();
        return $this->data($result);
    }

    /**
     * @notes 设置公众号配置
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/16 10:09 上午
     */
    public function setConfig()
    {
        $params = (new OfficialAccountSettingValidate())->post()->goCheck();
        (new OfficialAccountSettingLogic())->setConfig($params);
        return $this->success('操作成功',[],1,1);
    }
}