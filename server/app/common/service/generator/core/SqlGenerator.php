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

declare(strict_types=1);

namespace app\common\service\generator\core;


use think\facade\Db;
use think\helper\Str;

/**
 * sql文件生成器
 * Class SqlGenerator
 * @package app\common\service\generator\core
 */
class SqlGenerator extends BaseGenerator implements GenerateInterface
{

    /**
     * @notes 替换变量
     * @return mixed|void
     * @date 2022/6/22 18:19
     */
    public function replaceVariables()
    {
        // 需要替换的变量
        $needReplace = [
            '{MENU_TABLE}',
            '{PARTNER_ID}',
            '{LISTS_NAME}',
            '{PERMS_NAME}',
            '{PATHS_NAME}',
            '{COMPONENT_NAME}',
            '{CREATE_TIME}',
            '{UPDATE_TIME}'
        ];

        // 等待替换的内容
        $waitReplace = [
            $this->getMenuTableNameContent(),
            $this->getMenuPidContent(),
            $this->getListsNameContent(),
            $this->getLowerTableName(),
            $this->getLowerTableName(),
            $this->getLowerTableName(),
            time(),
            time()
        ];

        $templatePath = $this->getTemplatePath('sql');

        // 替换内容
        $content = $this->replaceFileData($needReplace, $waitReplace, $templatePath);

        $this->setContent($content);
    }


    /**
     * @notes 描述
     * @return mixed
     * @date 2022/6/22 18:19
     */
    public function getListsNameContent()
    {
        return $this->tableData['menu']['name'] ?? $this->tableData['table_comment'];
    }


    /**
     * @notes 获取上级菜单内容
     * @return int|mixed
     * @date 2022/7/8 11:39
     */
    public function getMenuPidContent()
    {
        return $this->tableData['menu']['pid'] ?? 0;
    }


    /**
     * @notes 获取菜单表内容
     * @return string
     * @date 2022/7/7 15:57
     */
    public function getMenuTableNameContent()
    {
        $tablePrefix = config('database.connections.mysql.prefix');
        return $tablePrefix . 'system_menu';
    }


    /**
     * @notes 是否构建菜单
     * @return bool
     * @date 2022/7/8 14:24
     */
    public function isBuildMenu()
    {
        $menuType = $this->tableData['menu']['type'] ?? 0;
        return $menuType == 1;
    }


    /**
     * @notes 构建菜单
     * @return bool
     * @date 2022/7/8 15:27
     */
    public function buildMenuHandle()
    {
        if (empty($this->content)) {
            return false;
        }
        $sqls = explode(';', trim($this->content));
        //执行sql
        foreach ($sqls as $sql) {
            if (!empty(trim($sql))) {
                Db::execute($sql . ';');
            }
        }
        return true;
    }


    /**
     * @notes 获取文件生成到模块的文件夹路径
     * @return mixed|void
     * @date 2022/6/22 18:19
     */
    public function getModuleGenerateDir()
    {
        $dir = $this->generatorDir . 'sql/';
        $this->checkDir($dir);
        return $dir;
    }


    /**
     * @notes 获取文件生成到runtime的文件夹路径
     * @return string
     * @date 2022/6/22 18:20
     */
    public function getRuntimeGenerateDir()
    {
        $dir = $this->generatorDir . 'sql/';
        $this->checkDir($dir);
        return $dir;
    }


    /**
     * @notes 生成的文件名
     * @return string
     * @date 2022/6/22 18:20
     */
    public function getGenerateName()
    {
        return 'menu.sql';
    }


    /**
     * @notes 文件信息
     * @return array
     * @date 2022/6/23 15:57
     */
    public function fileInfo(): array
    {
        return [
            'name' => $this->getGenerateName(),
            'type' => 'sql',
            'content' => $this->content
        ];
    }


}