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

return [
    'middleware' => [
        //初始化
        app\adminapi\http\middleware\InitMiddleware::class,
        //登录验证
        app\adminapi\http\middleware\LoginMiddleware::class,
        //权限认证
        app\adminapi\http\middleware\AuthMiddleware::class,
    ],
];
