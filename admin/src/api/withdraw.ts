import request from '@/utils/request'

// 提现申请表列表
export function apiWithdrawLists(params: any) {
    return request.get({ url: '/withdraw/lists', params })
}

// 审核提现申请
export function apiWithdrawAudit(params: any) {
    return request.post({ url: '/withdraw/audit', params })
}

// 删除提现申请表
export function apiWithdrawDelete(params: any) {
    return request.post({ url: '/withdraw/delete', params })
}
