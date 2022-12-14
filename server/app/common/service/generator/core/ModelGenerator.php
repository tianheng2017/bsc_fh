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


/**
 * 模型生成器
 * Class ModelGenerator
 * @package app\common\service\generator\core
 */
class ModelGenerator extends BaseGenerator implements GenerateInterface
{

    /**
     * @notes 替换变量
     * @return mixed|void
     * @date 2022/6/22 18:16
     */
    public function replaceVariables()
    {
        // 需要替换的变量
        $needReplace = [
            '{NAMESPACE}',
            '{CLASS_COMMENT}',
            '{UPPER_CAMEL_NAME}',
            '{PACKAGE_NAME}',
            '{TABLE_NAME}'
        ];

        // 等待替换的内容
        $waitReplace = [
            $this->getNameSpaceContent(),
            $this->getClassCommentContent(),
            $this->getUpperCamelName(),
            $this->getPackageNameContent(),
            $this->getTableName()
        ];

        $templatePath = $this->getTemplatePath('model');

        // 替换内容
        $content = $this->replaceFileData($needReplace, $waitReplace, $templatePath);

        $this->setContent($content);
    }


    /**
     * @notes 获取命名空间模板内容
     * @return string
     * @date 2022/6/22 18:16
     */
    public function getNameSpaceContent()
    {
        if (!empty($this->classDir)) {
            return "namespace app\\common\\model\\" . $this->classDir . ';';
        }
        return "namespace app\\common\\model;";
    }


    /**
     * @notes 获取类描述
     * @return string
     * @date 2022/6/22 18:16
     */
    public function getClassCommentContent()
    {
        if (!empty($this->tableData['class_comment'])) {
            $tpl = $this->tableData['class_comment'] . '模型';
        } else {
            $tpl = $this->getUpperCamelName() . '模型';
        }
        return $tpl;
    }


    /**
     * @notes 获取包名
     * @return string
     * @date 2022/6/22 18:16
     */
    public function getPackageNameContent()
    {
        return !empty($this->classDir) ? '\\' . $this->classDir : '';
    }


    /**
     * @notes 获取文件生成到模块的文件夹路径
     * @return string
     * @date 2022/6/22 18:16
     */
    public function getModuleGenerateDir()
    {
        $dir = $this->basePath . 'common/model/';
        if (!empty($this->classDir)) {
            $dir .= $this->classDir . '/';
            $this->checkDir($dir);
        }
        return $dir;
    }


    /**
     * @notes 获取文件生成到runtime的文件夹路径
     * @return string
     * @date 2022/6/22 18:17
     */
    public function getRuntimeGenerateDir()
    {
        $dir = $this->generatorDir . 'php/app/common/model/';
        $this->checkDir($dir);
        if (!empty($this->classDir)) {
            $dir .= $this->classDir . '/';
            $this->checkDir($dir);
        }
        return $dir;
    }


    /**
     * @notes 生成的文件名
     * @return string
     * @date 2022/6/22 18:17
     */
    public function getGenerateName()
    {
        return $this->getUpperCamelName() . '.php';
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
            'type' => 'php',
            'content' => $this->content
        ];
    }


}