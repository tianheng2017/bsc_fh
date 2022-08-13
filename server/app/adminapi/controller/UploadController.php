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

namespace app\adminapi\controller;


use app\common\service\UploadService;
use Exception;
use think\response\Json;

/**
 * 上传文件
 * Class UploadController
 * @package app\adminapi\controller
 */
class UploadController extends BaseAdminController
{
    /**
     * @notes 上传图片
     * @return Json
     * @date 2021/12/29 16:27
     */
    public function image()
    {
        try {
            $cid = $this->request->post('cid', 0);
            $result = UploadService::image($cid);
            return $this->success('上传成功', $result);
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

    /**
     * @notes 上传视频
     * @return Json
     * @date 2021/12/29 16:27
     */
    public function video()
    {
        try {
            $cid = $this->request->post('cid', 0);
            $result = UploadService::video($cid);
            return $this->success('上传成功', $result);
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

}