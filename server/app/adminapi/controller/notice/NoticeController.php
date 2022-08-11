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

namespace app\adminapi\controller\notice;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\notice\NoticeSettingLists;
use app\adminapi\logic\notice\NoticeLogic;
use app\adminapi\validate\notice\NoticeValidate;

/**
 * 通知控制器
 * Class NoticeController
 * @package app\adminapi\controller\notice
 */
class NoticeController extends BaseAdminController
{
    /**
     * @notes 查看通知设置列表
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/3/29 11:18
     */
    public function settingLists()
    {
        return $this->dataLists(new NoticeSettingLists());
    }


    /**
     * @notes 查看通知设置详情
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/3/29 11:18
     */
    public function detail()
    {
        $params = (new NoticeValidate())->goCheck('detail');
        $result = NoticeLogic::detail($params);
        return $this->data($result);
    }


    /**
     * @notes 通知设置
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/3/29 11:18
     */
    public function set()
    {
        $params = $this->request->post();
        $result = NoticeLogic::set($params);
        if ($result) {
            return $this->success('设置成功');
        }
        return $this->fail(NoticeLogic::getError());
    }
}