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

namespace app\common\model;

use app\common\service\FileService;
use think\Model;

/**
 * 基础模型
 * Class BaseModel
 * @package app\common\model
 */
class BaseModel extends Model
{
    /**
     * 资金日志对照
     */
    public static $mtype = [
        1       =>  '持币分红获得BNB',
        2       =>  '推广分红获得BNB',
        3       =>  '提取BNB',
        4       =>  '提取成功',
        5       =>  '提取驳回',
    ];

    /**
     * 资金日志对照-语言包专用
     */
    public static $mtypeLanguage = [
        1       =>  'mtype1',
        2       =>  'mtype2',
        3       =>  'mtype3',
        4       =>  'mtype4',
        5       =>  'mtype5',
    ];

    /**
     * @notes 公共处理图片,补全路径
     * @param $value
     * @return string
     * @author 张无忌
     * @date 2021/9/10 11:02
     */
    public function getImageAttr($value)
    {
        return trim($value) ? FileService::getFileUrl($value) : '';
    }

    /**
     * @notes 公共图片处理,去除图片域名
     * @param $value
     * @return mixed|string
     * @author 张无忌
     * @date 2021/9/10 11:04
     */
    public function setImageAttr($value)
    {
        return trim($value) ? FileService::setFileUrl($value) : '';
    }
}