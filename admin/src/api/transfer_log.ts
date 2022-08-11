import request from '@/utils/request'

// 转入记录表列表
export function apiTransferLogLists(params: any) {
    return request.get({ url: '/transfer_log/lists', params })
}

// 添加转入记录表
export function apiTransferLogAdd(params: any) {
    return request.post({ url: '/transfer_log/add', params })
}

// 编辑转入记录表
export function apiTransferLogEdit(params: any) {
    return request.post({ url: '/transfer_log/edit', params })
}

// 删除转入记录表
export function apiTransferLogDelete(params: any) {
    return request.post({ url: '/transfer_log/delete', params })
}
