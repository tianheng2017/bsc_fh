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

namespace app\adminapi\lists\file;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\file\File;
use app\common\service\FileService;

/**
 * 文件列表
 * Class FileLists
 * @package app\adminapi\lists\file
 */
class FileLists extends BaseAdminDataLists implements ListsSearchInterface
{

    /**
     * @notes 文件搜索条件
     * @return \string[][]
     * @date 2021/12/29 14:27
     */
    public function setSearch(): array
    {
        return [
            '=' => ['type', 'cid'],
            '%like%' => ['name']
        ];
    }


    /**
     * @notes 获取文件列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @date 2021/12/29 14:27
     */
    public function lists(): array
    {
        $lists = (new File())->field(['id,cid,type,name,uri,create_time'])
            ->order('id', 'desc')
            ->where($this->searchWhere)
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['url'] = $item['uri'];
            $item['uri'] = FileService::getFileUrl($item['uri']);
        }

        return $lists;
    }


    /**
     * @notes 获取文件数量
     * @return int
     * @date 2021/12/29 14:29
     */
    public function count(): int
    {
        return (new File())->where($this->searchWhere)->count();
    }
}