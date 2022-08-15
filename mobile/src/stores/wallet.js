import { defineStore } from "pinia"
import { showDialog } from 'vant'
import { layer } from '@layui/layer-vue'
import { baseURL } from '@/config/app'

const undefinedMessage1 = '请在Dapp浏览环境下打开'
const undefinedMessage2 = '请切换到币安智能链主网'
const unlockMessage = '请解锁钱包'

export const useWallet = defineStore('wallet', {
    state: () => {
        return {
            address: '',
			isDapp: false,
			isUnlock: false,
			amount1: null,
			amount2: null,
			min: null,
			max: null,
			zhi: null,
			san: null,
			first_leader: null,
			invite_url: null,
			withdraw_list: null,
			money_log_list: null,
        }
    },
    getters: {
        sortAddress: (state) => {
            if (state.address == '') {
                return ''
            }
            return state.address.slice(0, 15) + '...' + state.address.slice(-15)
        }
    },
    actions: {
        async init() {
			try {
				if (typeof window.ethereum == 'undefined') {
					throw new Error(undefinedMessage1)
				}
				
				this.isDapp = true

				window.ethereum.on('accountsChanged', function () {
					window.location.reload()
				});
				
				window.ethereum.on('chainChanged', function () {
					window.location.reload()
				});
				
				if (window.ethereum.chainId !== '0x38' || window.ethereum.networkVersion !== '56') {
					throw new Error(undefinedMessage2)
				}
				
				let address = undefined
				if (window.ethereum.isHbWallet) {
					address = window.ethereum.address
				} else {
					const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
					address = accounts[0]
				}
				if (!address) {
					throw new Error(unlockMessage)
				}
				
				this.isUnlock = true
				this.address = address
				
				await this.getUserInfo()
				
			} catch(e) {
				if (e?.code == -32002) {
					return showDialog.alert({
					    message: unlockMessage,
					})
				}
				return showDialog.alert({
				    message: e.message,
				})
			}
			
        },
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
		async getUserInfo() {
			try {
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
			} catch(e) {
				layer.msg(e.message, {icon: 2, time: 2000})
			}
		},
		async doWithdraw(amount) {
			try {
				const check = this.checkWallet()
				if (check !== true) {
					return showDialog.alert({
					    message: check.message,
					})
				}
				
				if (amount <= 0) {
					throw new Error("提取数量必须大于0")
				}
				
				if (amount > this.amount2) {
					throw new Error("不能大于可提取数量")
				}
				
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
		async getWithdrawList () {
			try {
				const check = this.checkWallet()
				if (check !== true) {
					return showDialog.alert({
					    message: check.message,
					})
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
		async getMoneyLogList () {
			try {
				const check = this.checkWallet()
				if (check !== true) {
					return showDialog.alert({
					    message: check.message,
					})
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
    }
})