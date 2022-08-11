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
use app\adminapi\lists\ad\AdPositionLists;
use app\adminapi\logic\ad\AdPositionLogic;
use app\adminapi\validate\ad\AdPositionValidate;

/**
 * 广告位置
 * Class AdPositionController
 * @package app\adminapi\controller\ad
 */
class AdPositionController extends BaseAdminController
{
    /**
     * @notes 查看广告位列表
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 4:50 下午
     */
    public function lists()
    {
        return $this->dataLists(new AdPositionLists());
    }

    /**
     * @notes 添加广告位
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 5:05 下午
     */
    public function add()
    {
        $params = (new AdPositionValidate())->post()->goCheck('add');
        (new AdPositionLogic())->add($params);
        return $this->success('操作成功',[],1,1);
    }

    /**
     * @notes 查看广告位详情
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 5:09 下午
     */
    public function detail()
    {
        $params = (new AdPositionValidate())->get()->goCheck('detail');
        $result = (new AdPositionLogic())->detail($params['id']);
        return $this->success('获取成功',$result);
    }

    /**
     * @notes 编辑广告位
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 5:13 下午
     */
    public function edit()
    {
        $params = (new AdPositionValidate())->post()->goCheck('edit');
        (new AdPositionLogic())->edit($params);
        return $this->success('操作成功',[],1,1);
    }

    /**
     * @notes 删除广告位
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 5:28 下午
     */
    public function del()
    {
        $params = (new AdPositionValidate())->post()->goCheck('del');
        (new AdPositionLogic())->del($params['id']);
        return $this->success('操作成功',[],1,1);
    }

    /**
     * @notes 修改广告位状态
     * @return \think\response\Json
     * @author ljj
     * @date 2022/2/14 5:32 下午
     */
    public function status()
    {
        $params = (new AdPositionValidate())->post()->goCheck('status');
        (new AdPositionLogic())->status($params);
        return $this->success('操作成功',[],1,1);
    }
}