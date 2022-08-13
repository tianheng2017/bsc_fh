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
 * vue-api生成器
 * Class VueApiGenerator
 * @package app\common\service\generator\core
 */
class VueApiGenerator extends BaseGenerator implements GenerateInterface
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
            '{COMMENT}',
            '{UPPER_CAMEL_NAME}',
            '{ROUTE}'
        ];

        // 等待替换的内容
        $waitReplace = [
            $this->getCommentContent(),
            $this->getUpperCamelName(),
            $this->getRouteContent(),
        ];

        $templatePath = $this->getTemplatePath('vue_api');

        // 替换内容
        $content = $this->replaceFileData($needReplace, $waitReplace, $templatePath);

        $this->setContent($content);
    }


    /**
     * @notes 描述
     * @return mixed
     * @date 2022/6/22 18:19
     */
    public function getCommentContent()
    {
        return $this->tableData['table_comment'];
    }


    /**
     * @notes 路由名称
     * @return array|string|string[]
     * @date 2022/6/22 18:19
     */
    public function getRouteContent()
    {
        $content = $this->getTableName();
        if (!empty($this->classDir)) {
            $content = $this->classDir . '.' . $this->getTableName();
        }
        return Str::lower($content);
    }


    /**
     * @notes 获取文件生成到模块的文件夹路径
     * @return mixed|void
     * @date 2022/6/22 18:19
     */
    public function getModuleGenerateDir()
    {
        $dir = dirname(app()->getRootPath()) . '/admin/src/api/';
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
        $dir = $this->generatorDir . 'vue/src/api/';
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
        return $this->getLowerTableName() . '.ts';
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
            'type' => 'ts',
            'content' => $this->content
        ];
    }


}