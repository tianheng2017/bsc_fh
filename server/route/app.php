<?php
use think\facade\Route;

//前台后台
Route::rule('mobile/:any', function () {
    return view(app()->getRootPath() . 'public/index/index.html');
})->pattern(['any' => '\w+']);

//管理后台
Route::rule('admin/:any', function () {
    return view(app()->getRootPath() . 'public/admin/index.html');
})->pattern(['any' => '\w+']);