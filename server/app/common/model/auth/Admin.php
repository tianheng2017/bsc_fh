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

namespace app\common\model\auth;

use app\common\enum\YesNoEnum;
use app\common\model\BaseModel;
use app\common\model\dept\Dept;
use think\model\concern\SoftDelete;
use app\common\service\FileService;

class Admin extends BaseModel
{
    use SoftDelete;

    protected $deleteTime = 'delete_time';

    /**
     * @notes 关联角色模型
     * @date 2021/6/30 17:48
     * @return \think\model\relation\HasOne
     * @author lr
     */
    public function role()
    {
        return $this->hasOne('role', 'id', 'role_id')
            ->field('id,name');
    }


    /**
     * @notes 关联部门
     * @return \think\model\relation\HasOne
     * @date 2022/5/26 11:11
     */
    public function dept()
    {
        return $this->hasOne(Dept::class, 'id', 'dept_id')->bind(['dept_name' => 'name']);
    }


    /**
     * @notes 角色菜单关联
     * @return \think\model\relation\HasMany
     * @date 2022/7/7 12:04
     */
    public function roleMenu()
    {
        return $this->hasMany(SystemRoleMenu::class,'role_id','role_id');
    }



    /**
     * @notes 获取禁用状态
     * @param $value
     * @param $data
     * @return string|string[]
     * @date 2021/7/7 01:25
     */
    public function getDisableDescAttr($value, $data)
    {
        return YesNoEnum::getDisableDesc($data['disable']);
    }

    /**
     * @notes 最后登录时间获取器 - 格式化：年-月-日 时:分:秒
     * @param $value
     * @return string
     * @author Tab
     * @date 2021/7/13 11:35
     */
    public function getLoginTimeAttr($value)
    {
        return empty($value) ? '' : date('Y-m-d H:i:s', $value);
    }

    /**
     * @notes 头像获取器 - 头像路径添加域名
     * @param $value
     * @return string
     * @author Tab
     * @date 2021/7/13 11:35
     */
    public function getAvatarAttr($value)
    {
        return empty($value) ? FileService::getFileUrl(config('project.default_image.admin_avatar')) : FileService::getFileUrl(trim($value, '/'));
    }
}