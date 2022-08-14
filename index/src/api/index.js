import request from '@/utils/request'

export function getUserInfo(params) {
	return request.post('/index/index/getUserInfo', params)
}