import request from '@/utils/request'

// 用户表列表
export function apiUsersLists(params: any) {
    return request.get({ url: '/users/lists', params })
}

// 添加用户表
export function apiUsersAdd(params: any) {
    return request.post({ url: '/users/add', params })
}

// 编辑用户表
export function apiUsersEdit(params: any) {
    return request.post({ url: '/users/edit', params })
}

// 删除用户表
export function apiUsersDelete(params: any) {
    return request.post({ url: '/users/delete', params })
}
