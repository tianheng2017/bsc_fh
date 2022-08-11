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

namespace app\adminapi\controller\ad;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\ad\AdLists;
use app\adminapi\logic\ad\AdLogic;
use app\adminapi\validate\ad\AdValidate;

/**
 * 广告
 * Class AdController
 * @package app\adminapi\controller\ad
 */
class AdController extends BaseAdminController
{
    /**
     * @notes 广告列表
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 6:41 下午
     */
    public function lists()
    {
        return $this->dataLists(new AdLists());
    }

    /**
     * @notes 添加广告
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 7:00 下午
     */
    public function add()
    {
        $params = (new AdValidate())->post()->goCheck('add');
        (new AdLogic())->add($params);
        return $this->success('操作成功',[],1,1);
    }

    /**
     * @notes 查看广告详情
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/15 10:14 上午
     */
    public function detail()
    {
        $params = (new AdValidate())->get()->goCheck('detail');
        $result = (new AdLogic())->detail($params['id']);
        return $this->success('获取成功',$result);
    }

    /**
     * @notes 编辑广告
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/15 10:24 上午
     */
    public function edit()
    {
        $params = (new AdValidate())->post()->goCheck('edit');
        (new AdLogic())->edit($params);
        return $this->success('操作成功',[],1,1);
    }

    /**
     * @notes 删除广告
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/15 10:32 上午
     */
    public function del()
    {
        $params = (new AdValidate())->post()->goCheck('del');
        (new AdLogic())->del($params['id']);
        return $this->success('操作成功',[],1,1);
    }

    /**
     * @notes 修改广告状态
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/15 10:39 上午
     */
    public function status()
    {
        $params = (new AdValidate())->post()->goCheck('status');
        (new AdLogic())->status($params);
        return $this->success('操作成功',[],1,1);
    }
}