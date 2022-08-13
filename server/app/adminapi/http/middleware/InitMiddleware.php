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
declare (strict_types=1);

namespace app\adminapi\http\middleware;

use app\adminapi\controller\BaseAdminController;
use app\common\exception\ControllerExtendException;
use think\exception\ClassNotFoundException;
use think\exception\HttpException;

/**
 * 初始化验证中间件
 * Class InitMiddleware
 * @package app\adminapi\http\middleware
 */
class InitMiddleware
{
    /**
     * @notes 初始化
     * @param $request
     * @param \Closure $next
     * @return mixed
     * @date 2021/7/2 19:29
     */
    public function handle($request, \Closure $next)
    {
        //获取控制器
        try {
            $controller = str_replace('.', '\\', $request->controller());
            $controller = '\\app\\adminapi\\controller\\' . $controller . 'Controller';
            $controllerClass = invoke($controller);
            if (($controllerClass instanceof BaseAdminController) === false) {
                throw new ControllerExtendException($controller, '404');
            }
        } catch (ClassNotFoundException $e) {
            throw new HttpException(404, 'controller not exists:' . $e->getClass());
        }

        //创建控制器对象
        $request->controllerObject = invoke($controller);

        return $next($request);
    }
}