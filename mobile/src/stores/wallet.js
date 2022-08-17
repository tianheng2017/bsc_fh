import { defineStore } from "pinia"
import { layer } from '@layui/layer-vue'
import { showDialog } from 'vant'
import { baseURL } from '@/config/app'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const undefinedMessage1 = i18n.t('message.in_dapp')
const undefinedMessage2 = i18n.t('message.switch_bsc')
const unlockMessage = i18n.t('message.unlock_wallet')

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
			my_sl: null,
			all_sl: null,
			bd: '开发中',
			first_leader: null,
			invite_url: null,
			withdraw_list: null,
			money_log_list: null,
			fh_wallet: null,
			rewardBnb: null,
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
					const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
					address = accounts[0]
				}
				if (!address) {
					throw new Error(unlockMessage)
				}
				
				this.isUnlock = true
				this.address = address
				
				await this.getUserInfo()
				await this.getRewardBnb()
				
			} catch(e) {
				if (e?.code == -32002) {
					return showDialog({
						message: unlockMessage,
					})
				}
				return showDialog({
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
		getUserInfo() {
			return new Promise((resolve, reject) => {
				try {
					uni.request({
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
							this.my_sl = res.data.my_sl
							this.all_sl = res.data.all_sl
							// this.bd = res.data.bd
							this.first_leader = res.data.first_leader
							this.invite_url = res.data.invite_url
							this.fh_wallet = res.data.fh_wallet
							resolve()
						}
					});
				} catch(e) {
					reject(e.message)
				}
			})
		},
		async doWithdraw(amount) {
			try {
				const check = this.checkWallet()
				if (check !== true) {
					return showDialog({
						message: check.message,
					})
				}
				
				if (amount <= 0) {
					throw new Error(i18n.t('message.amount_limit'))
				}
				
				if (amount > this.amount2) {
					throw new Error(i18n.t('message.exceed_limit'))
				}
				
				const msg = i18n.t('message.sign_msg')
				const sign = await window.ethereum.request({
					method: 'personal_sign',
					params: [msg, this.address],
				});
				
				uni.request({
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
		getWithdrawList () {
			try {
				const check = this.checkWallet()
				if (check !== true) {
					return 
				}
				
				uni.request({
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
		getMoneyLogList () {
			try {
				const check = this.checkWallet()
				if (check !== true) {
					return 
				}
				
				uni.request({
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
		},
		async getRewardBnb () {
			try {
				const check = this.checkWallet()
				if (check !== true) {
					return 
				}
				
				const balance = await window.ethereum.request({ 
					method: 'eth_getBalance',
					params: [
						this.fh_wallet,
						"pending"
					]
				})
				
				this.rewardBnb = eval(balance).toString(16)
			} catch(e) {
				return layer.msg(e.message, {icon: 2, time: 2000})
			}
		}
    }
})