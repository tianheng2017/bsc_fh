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


use think\helper\Str;


/**
 * 生成器基类
 * Class BaseGenerator
 * @package app\common\service\generator\core
 */
abstract class BaseGenerator
{

    /**
     * 模板文件夹
     * @var string
     */
    protected $templateDir;


    /**
     * 模块名
     * @var string
     */
    protected $moduleName;


    /**
     * 类目录
     * @var string
     */
    protected $classDir;


    /**
     * 表信息
     * @var array
     */
    protected $tableData;


    /**
     * 表字段信息
     * @var array
     */
    protected $tableColumn;


    /**
     * 文件内容
     * @var string
     */
    protected $content;


    /**
     * basePath
     * @var string
     */
    protected $basePath;


    /**
     * rootPath
     * @var string
     */
    protected $rootPath;


    /**
     * 生成的文件夹
     * @var string
     */
    protected $generatorDir;


    public function __construct()
    {
        $this->basePath = base_path();
        $this->rootPath = root_path();
        $this->templateDir = $this->basePath . 'common/service/generator/stub/';
        $this->generatorDir = $this->rootPath . 'runtime/generate/';
        $this->checkDir($this->generatorDir);
    }


    /**
     * @notes 初始化表表数据
     * @param array $tableData
     * @date 2022/6/22 18:03
     */
    public function initGenerateData(array $tableData)
    {
        // 设置当前表信息
        $this->setTableData($tableData);
        // 设置模块名
        $this->setModuleName($tableData['module_name']);
        // 设置类目录
        $this->setClassDir($tableData['class_dir'] ?? '');
        // 替换模板变量
        $this->replaceVariables();
    }


    /**
     * @notes 生成文件到模块或runtime目录
     * @date 2022/6/22 18:03
     */
    public function generate()
    {
        //生成方式  0-压缩包下载 1-生成到模块
        if ($this->tableData['generate_type']) {
            // 生成路径
            $path = $this->getModuleGenerateDir() . $this->getGenerateName();
        } else {
            // 生成到runtime目录
            $path = $this->getRuntimeGenerateDir() . $this->getGenerateName();
        }
        // 写入内容
        file_put_contents($path, $this->content);
    }


    /**
     * @notes 获取文件生成到模块的文件夹路径
     * @return mixed
     * @date 2022/6/22 18:05
     */
    abstract public function getModuleGenerateDir();


    /**
     * @notes  获取文件生成到runtime的文件夹路径
     * @return mixed
     * @date 2022/6/22 18:05
     */
    abstract public function getRuntimeGenerateDir();


    /**
     * @notes 替换模板变量
     * @return mixed
     * @date 2022/6/22 18:06
     */
    abstract public function replaceVariables();


    /**
     * @notes 生成文件名
     * @return mixed
     * @date 2022/6/22 18:17
     */
    abstract public function getGenerateName();


    /**
     * @notes 文件夹不存在则创建
     * @param string $path
     * @date 2022/6/22 18:07
     */
    public function checkDir(string $path)
    {
        !is_dir($path) && mkdir($path, 0755, true);
    }


    /**
     * @notes 设置表信息
     * @param $tableData
     * @date 2022/6/22 18:07
     */
    public function setTableData($tableData)
    {
        $this->tableData = !empty($tableData) ? $tableData : [];
        $this->tableColumn = $tableData['table_column'] ?? [];
    }


    /**
     * @notes 设置模块名
     * @param string $moduleName
     * @date 2022/6/22 18:07
     */
    public function setModuleName(string $moduleName): void
    {
        $this->moduleName = strtolower($moduleName);
    }


    /**
     * @notes 设置类目录
     * @param string $classDir
     * @date 2022/6/22 18:08
     */
    public function setClassDir(string $classDir): void
    {
        $this->classDir = $classDir;
    }


    /**
     * @notes 设置生成文件内容
     * @param string $content
     * @date 2022/6/22 18:08
     */
    public function setContent(string $content): void
    {
        $this->content = $content;
    }


    /**
     * @notes 获取模板路径
     * @param string $templateName
     * @return string
     * @date 2022/6/22 18:09
     */
    public function getTemplatePath(string $templateName): string
    {
        return $this->templateDir . $templateName . '.stub';
    }


    /**
     * @notes 小驼峰命名
     * @return string
     * @date 2022/6/27 18:44
     */
    public function getLowerCamelName()
    {
        return Str::camel($this->getTableName());
    }


    /**
     * @notes 大驼峰命名
     * @return string
     * @date 2022/6/22 18:09
     */
    public function getUpperCamelName()
    {
        return Str::studly($this->getTableName());
    }


    /**
     * @notes 表名小写
     * @return string
     * @date 2022/7/12 10:41
     */
    public function getLowerTableName()
    {
        return Str::lower($this->getTableName());
    }


    /**
     * @notes 获取表名
     * @return array|string|string[]
     * @date 2022/6/22 18:09
     */
    public function getTableName()
    {
        $tablePrefix = config('database.connections.mysql.prefix');
        return str_replace($tablePrefix, '', $this->tableData['table_name']);
    }


    /**
     * @notes 获取表主键
     * @return mixed|string
     * @date 2022/6/22 18:09
     */
    public function getPkContent()
    {
        $pk = 'id';
        if (empty($this->tableColumn)) {
            return $pk;
        }

        foreach ($this->tableColumn as $item) {
            if ($item['is_pk']) {
                $pk = $item['column_name'];
            }
        }
        return $pk;
    }


    /**
     * @notes 获取作者信息
     * @return mixed|string
     * @date 2022/6/24 10:18
     */
    public function getAuthorContent()
    {
        return empty($this->tableData['author']) ? 'likeadmin' : $this->tableData['author'];
    }


    /**
     * @notes 代码生成备注时间
     * @return false|string
     * @date 2022/6/24 10:28
     */
    public function getNoteDateContent()
    {
        return date('Y/m/d H:i');
    }


    /**
     * @notes 设置空额占位符
     * @param $content
     * @param $blankpace
     * @return string
     * @date 2022/6/22 18:09
     */
    public function setBlankSpace($content, $blankpace)
    {
        $content = explode(PHP_EOL, $content);
        foreach ($content as $line => $text) {
            $content[$line] = $blankpace . $text;
        }
        return (implode(PHP_EOL, $content));
    }


    /**
     * @notes 替换内容
     * @param $needReplace
     * @param $waitReplace
     * @param $template
     * @return array|false|string|string[]
     * @date 2022/6/23 9:52
     */
    public function replaceFileData($needReplace, $waitReplace, $template)
    {
        return str_replace($needReplace, $waitReplace, file_get_contents($template));
    }


    /**
     * @notes 生成方式是否为压缩包
     * @return bool
     * @date 2022/6/23 17:02
     */
    public function isGenerateTypeZip()
    {
        return $this->tableData['generate_type'] == 0;
    }

    


}