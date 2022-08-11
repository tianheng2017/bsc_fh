import request from '@/utils/request'

// 资金明细表列表
export function apiMoneyLogLists(params: any) {
    return request.get({ url: '/money_log/lists', params })
}

// 添加资金明细表
export function apiMoneyLogAdd(params: any) {
    return request.post({ url: '/money_log/add', params })
}

// 编辑资金明细表
export function apiMoneyLogEdit(params: any) {
    return request.post({ url: '/money_log/edit', params })
}

// 删除资金明细表
export function apiMoneyLogDelete(params: any) {
    return request.post({ url: '/money_log/delete', params })
}
