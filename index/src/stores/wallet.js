import { defineStore } from "pinia"
import { Toast, Dialog } from 'vant'
import { formatNumber } from '@/utils/tools'
import { layer } from '@layui/layer-vue'
import { baseURL } from '@/config/app'

// 消息库
const undefinedMessage1 = '请在Dapp浏览器环境下打开'
const undefinedMessage2 = '请切换到BSC链主网'
const unlockMessage = '请解锁钱包'
const noSupportMessage = '币种不支持'
const checkAddressMessage = '收款人钱包格式不正确'
const checkAmountMessage = '转账数量必须大于0'
const broadcastMessage = '广播数据成功，交易hash：'
const operationFailedMessage = '错误：'
const balanceNotSufficient = 'balance is not sufficient'
const balanceNotSufficientCN = '余额不足'

export const useWallet = defineStore('wallet', {
    state: () => {
        return {
            address: '',
			isDapp: false,		// 是否处于dapp环境
			isUnlock: false,	// 钱包是否解锁
			amount1: null,		// 快照代币余额
			amount2: null,		// BNB收益
			min: null,			// 小区业绩
			max: null,			// 大区业绩
			zhi: null,			// 直推人数
			san: null,			// 伞下人数
			first_leader: null,	// 推荐人
			invite_url: null,   // 推广链接
			withdraw_list: null, // 提取记录
			money_log_list: null, // 资金日志
        }
    },
    getters: {
        sortAddress: (state) => {
            if (state.address == '') {
                return ''
            }
            return state.address.slice(0, 10) + '...' + state.address.slice(-10)
        }
    },
    actions: {
		/**
		 * @note 初始化
		 */
        async init() {
			try {
				// 页面环境检测1
				if (typeof window.ethereum == 'undefined') {
					throw new Error(undefinedMessage1)
				}
				
				// 已处于Dapp环境
				this.isDapp = true
				
				// 监听账号切换
				window.ethereum.on('accountsChanged', function () {
					window.location.reload()
				});
				
				// 监听网络切换
				window.ethereum.on('chainChanged', function () {
					window.location.reload()
				});
				
				// 页面环境检测2
				if (window.ethereum.chainId !== 56 && window.ethereum.networkVersion !== '56') {
					throw new Error(undefinedMessage2)
				}
				
				// 钱包是否解锁
				let address =  undefined
				if (window.ethereum.isHbWallet) {
					address = window.ethereum.address
				} else {
					const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
					address = accounts[0]
				}
				if (address == undefined) {
					throw new Error(unlockMessage)
				}
				
				// 钱包已解锁
				this.isUnlock = true
				
				// 获得钱包地址
				this.address = address
				
			} catch(e) {
				return Dialog.alert({
				    message: e.message,
				})
			}
			
        },
		
		/**
		 * 环境检测
		 */
		checkWallet() {
			if (!this.isDapp) {
				return {
					message: undefinedMessage1,
				}
			}
			
			if (!this.isUnlock) {
				return {
					message: unlockMessage,
				}
			}
			
			return true
		},
		
		/**
		 * 获取个人信息
		 */
		async getUserInfo() {
			await uni.request({
			    url: baseURL + '/index/index/getUserInfo',
				method: 'POST',
			    data: {
			        address: this.address
			    },
				header: {
					'X-Requested-With': 'xmlhttprequest'
				},
			    success: (res) => {
					res = res.data
			        if (res.code == 0) {
						return layer.msg(res.msg, {icon: 2, time: 2000})
					}
					this.amount1 = res.data.amount1
					this.amount2 = res.data.amount2
					this.min = res.data.min
					this.max = res.data.max
					this.zhi = res.data.zhi
					this.san = res.data.san
					this.first_leader = res.data.first_leader
					this.invite_url = res.data.invite_url
			    }
			});
		},
		
		/** BNB收益提取
		 * @param {Object} amount 提取数量
		 */
		async doWithdraw(amount) {
			try {
				// 环境检测
				const check = this.checkWallet()
				if (check !== true) {
					throw new Error(check.message)
				}
				
				// 校验金额
				if (amount > this.amount2) {
					throw new Error("提取数量不能大于当前BNB收益")
				}
				
				// 身份鉴权
				const msg = '您正在进行重要操作，为保障资金安全，需鉴权验证身份！';
				const sign = await window.ethereum.request({
					method: 'personal_sign',
					params: [msg, this.address],
				});
				
				await uni.request({
				    url: baseURL + '/index/index/doWithdraw',
					method: 'POST',
				    data: {
				        address: this.address,
						amount: amount,
						msg: msg, 
						sign: sign,
				    },
					header: {
						'X-Requested-With': 'xmlhttprequest'
					},
				    success: (res) => {
						res = res.data
				        if (res.code) {
							this.getUserInfo()
						}
						layer.msg(res.msg, {icon: res.code ? 1 : 2, time: 2000})
				    }
				});
			} catch(e) {
				layer.msg(e.message, {icon: 2, time: 2000})
			}
		},
		
		/**
		 * 获取提取记录
		 */
		async getWithdrawList () {
			try {
				// 环境检测
				const check = this.checkWallet()
				if (check !== true) {
					throw new Error(check.message)
				}
				
				await uni.request({
				    url: baseURL + '/index/index/getWithdrawList',
					method: 'POST',
				    data: {
				        address: this.address,
				    },
					header: {
						'X-Requested-With': 'xmlhttprequest'
					},
				    success: (res) => {
						res = res.data
				        if (res.code == 1) {
							this.withdraw_list = res.data
						}
				    }
				});
			} catch(e) {
				return layer.msg(e.message, {icon: 2, time: 2000})
			}
		},
		/**
		 * 获取收益明细
		 */
		async getMoneyLogList () {
			try {
				// 环境检测
				const check = this.checkWallet()
				if (check !== true) {
					throw new Error(check.message)
				}
				
				await uni.request({
				    url: baseURL + '/index/index/getMoneyLogList',
					method: 'POST',
				    data: {
				        address: this.address,
				    },
					header: {
						'X-Requested-With': 'xmlhttprequest'
					},
				    success: (res) => {
						res = res.data
				        if (res.code == 1) {
							this.money_log_list = res.data
						}
				    }
				});
			} catch(e) {
				return layer.msg(e.message, {icon: 2, time: 2000})
			}
		}
    },
})