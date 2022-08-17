<script setup>
	import {
		showDialog,
		showConfirmDialog,
	} from 'vant'
	import {
		onMounted,
		onBeforeUnmount,
		ref,
		watch,
		computed
	} from 'vue'
	import { Locale } from 'vant'
	import { useI18n } from 'vue-i18n'
	import {
		useWallet
	} from '@/stores/wallet'
	import {
		layer
	} from '@layui/layer-vue'
	import useClipboard from 'vue-clipboard3'
	import { baseURL } from '@/config/app'
	import { changeSystemLanguage } from '@/language/index'
	import walletImg from '@/assets/images/wallet.png'
	import darkImg from '@/assets/images/dark-theme.svg'
	import lightImg from '@/assets/images/light-theme.svg'
	import languageImg from '@/assets/images/language.png'
	import emptyImg from '@/assets/images/empty.png'
	
	const i18n = useI18n()
	
	let undefinedMessage1 = i18n.t('message.in_dapp')
	let undefinedMessage2 = i18n.t('message.switch_bsc')
	let unlockMessage = i18n.t('message.unlock_wallet')
	
	const onSelect = (action) => {
		localStorage.setItem('language', action.value)
		i18n.locale.value = action.value
		
		const  labelAndValue = changeSystemLanguage(action.value)
		Locale.use(labelAndValue[0], labelAndValue[1])
		
		undefinedMessage1 = i18n.t('message.in_dapp')
		undefinedMessage2 = i18n.t('message.switch_bsc')
		unlockMessage = i18n.t('message.unlock_wallet')
	}

	const getQueryString = (name) => {
		const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
		const r = window.location.search.substr(1).match(reg)
		if (r != null) {
			return unescape(r[2])
		}
		return null
	}

	const invite = getQueryString('invite')
	if (invite) {
		$cookies.config("0")
		$cookies.set("invite", invite)
	}
	
	const timer = ref('')
	const wallet = useWallet()
	onMounted(async () => {
		await setTimeout(async () => {
			await init()
		}, 300)
	})
	onBeforeUnmount(() => {
		clearInterval(timer.value)
	})

	const tab = ref(0)
	const amount = ref('')
	const withdraw = () => {
		const check = checkWallet()
		if (check !== true) {
			return showDialog({
				message: check.message,
			})
		}
		if (amount.value == '') {
			return layer.msg(i18n.t('message.please_take_number'), {
				icon: 2,
				time: 2000
			})
		}
		showConfirmDialog({
			title: i18n.t('message.hint'),
			message: i18n.t('message.sure_take', {number: amount.value}),
		})
		.then(() => {
			doWithdraw(amount.value)
		})
	}

	const tabChange = (e) => {
		if (e == 1) {
			getWithdrawList()
		} else if (e == 2) {
			getMoneyLogList()
		}
	}

	const themeVars = {
		NavBarBackground: '#1C1C1E',
		NavBarTitleTextColor: '#FFF',
		NotifyLineHeight: '46px',
		FieldTextAreaMinHeight: '300px',
		CellHorizontalPadding: '5px',
		DropdownItemZIndex: 999,
		GridItemContentPadding: '8px'
	}

	const theme = ref(localStorage.getItem('theme') || 'dark')
	const darkWhite = ref(localStorage.getItem('darkWhite') || 'text-white')
	const themeIcon = ref(localStorage.getItem('themeIcon') || lightImg)
	const setValueAndCache = (t, d, tv) => {
		theme.value = t
		darkWhite.value = d
		themeIcon.value = tv
		localStorage.setItem('theme', t)
		localStorage.setItem('darkWhite', d)
		localStorage.setItem('themeIcon', tv)
	}
	const toggleTheme = () => {
		if (theme.value == 'dark') {
			setValueAndCache('light', 'noCss', darkImg)
		} else {
			setValueAndCache('dark', 'text-white', lightImg)
		}
	}
	
	const allAmount = () => {
		amount.value = wallet.amount2 || ''
	}

	const {
		toClipboard
	} = useClipboard()
	const copy = async (val) => {
		try {
			const check = checkWallet()
			if (check !== true) {
				return showDialog({
					message: check.message,
				})
			}
			await toClipboard(val)
			return layer.msg(i18n.t('message.copy_success'), {icon: 1})
		} catch (e) {
			return layer.msg(i18n.t('message.copy_error') + '：' + e.message, {icon: 2})
		}
	}

	const showPopover = ref(false);
	const actions = [
		{
			text: 'English',
			value: 'enUS',
		},
		{
			text: '简体',
			value: 'zhCN',
		},
		{
			text: '繁體',
			value: 'zhHK',
		},
		{
			text: '日本',
			value: 'jaJP',
		},
		{
			text: '한국인',
			value: 'koKR',
		},
	]
	
	const init = async() => {
		try {
			if (typeof window.ethereum == 'undefined') {
				throw new Error(undefinedMessage1)
			}
			
			wallet.isDapp = true
			
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
			
			wallet.isUnlock = true
			wallet.address = address
			
			await getUserInfo()
			
			timer.value = setInterval(getUserInfo, 10000)
			
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
	}
	
	const checkWallet = () => {
		if (!wallet.isDapp) {
			return {
				message: undefinedMessage1,
			}
		}
		
		if (!wallet.isUnlock) {
			return {
				message: unlockMessage,
			}
		}
		
		return true
	}
	
	const getUserInfo = () => {
		return new Promise((resolve, reject) => {
			try {
				uni.request({
					url: baseURL + '/index/index/getUserInfo',
					method: 'POST',
					data: {
						address: wallet.address
					},
					header: {
						'X-Requested-With': 'xmlhttprequest'
					},
					success: (res) => {
						res = res.data
						
						if (res.code == 0) {
							return layer.msg(res.msg, {icon: 2, time: 2000})
						}
						
						wallet.amount1 = res.data.amount1
						wallet.amount2 = res.data.amount2
						wallet.min = res.data.min
						wallet.max = res.data.max
						wallet.my_sl = res.data.my_sl
						wallet.all_sl = res.data.all_sl
						wallet.bd = res.data.bd
						wallet.first_leader = res.data.first_leader
						wallet.invite_url = res.data.invite_url
						wallet.fh_wallet = res.data.fh_wallet
						wallet.rewardBnb = res.data.rewardBnb
						resolve()
					}
				});
			} catch(e) {
				reject(e.message)
			}
		})
	}
	
	const doWithdraw = async(price) => {
		try {
			const check = checkWallet()
			if (check !== true) {
				return showDialog({
					message: check.message,
				})
			}
			
			if (price <= 0) {
				throw new Error(i18n.t('message.amount_limit'))
			}
			
			if (price > wallet.amount2) {
				throw new Error(i18n.t('message.exceed_limit'))
			}
			
			const msg = i18n.t('message.sign_msg')
			const sign = await window.ethereum.request({
				method: 'personal_sign',
				params: [msg, wallet.address],
			});
			
			uni.request({
			    url: baseURL + '/index/index/doWithdraw',
				method: 'POST',
			    data: {
			        address: wallet.address,
					amount: price,
					msg: msg, 
					sign: sign,
			    },
				header: {
					'X-Requested-With': 'xmlhttprequest'
				},
			    success: (res) => {
					res = res.data
					
			        if (res.code) {
						getUserInfo()
					}
					
					amount.value = ''
					
					layer.msg(i18n.t(res.msg), {icon: res.code ? 1 : 2, time: 2000})
			    }
			});
		} catch(e) {
			layer.msg(e.message, {icon: 2, time: 2000})
		}
	}
	
	const getWithdrawList = () => {
		try {
			const check = checkWallet()
			if (check !== true) {
				return 
			}
			
			uni.request({
			    url: baseURL + '/index/index/getWithdrawList',
				method: 'POST',
			    data: {
			        address: wallet.address,
			    },
				header: {
					'X-Requested-With': 'xmlhttprequest'
				},
			    success: (res) => {
					res = res.data
					
			        if (res.code == 1) {
						wallet.withdraw_list = res.data
					}
			    }
			});
		} catch(e) {
			return layer.msg(e.message, {icon: 2, time: 2000})
		}
	}
	
	const getMoneyLogList = () => {
		try {
			const check = checkWallet()
			if (check !== true) {
				return 
			}
			
			uni.request({
			    url: baseURL + '/index/index/getMoneyLogList',
				method: 'POST',
			    data: {
			        address: wallet.address,
			    },
				header: {
					'X-Requested-With': 'xmlhttprequest'
				},
			    success: (res) => {
					res = res.data
					
			        if (res.code == 1) {
						wallet.money_log_list = res.data
					}
			    }
			});
		} catch(e) {
			return layer.msg(e.message, {icon: 2, time: 2000})
		}
	}
	
</script>

<template>
	<view :class="{'bg-black': theme == 'dark'}">
		<van-config-provider :theme-vars="themeVars" :theme="theme">
			<van-nav-bar title="BSC Dapp" safe-area-inset-top>
				<template #right>
					<van-row gutter="12">
					  <van-col span="12">
						  <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
						  	<template #reference>
						  		<van-icon :name="languageImg" size="27" style="margin-top:8px;"/>
						  	</template>
						  </van-popover>
					  </van-col>
					  <van-col span="12">
						  <van-icon :name="themeIcon" size="27" @tap="toggleTheme" style="margin-top:8px;" />
					  </van-col>
					</van-row>
				</template>
			</van-nav-bar>
			<view class="container mx-auto mt-2.5">
				<van-row align="center" :class="['px-2', darkWhite]" @click="copy(wallet.address)">
					<van-image radius="50%" width="50px" height="50px" :src="walletImg" />
					<view class="pl-2 text-xs">
						{{ wallet.sortAddress || ($t('message.wait')+ '...') }}
					</view>
				</van-row>
				<view class="mt-2">
					<van-grid :column-num="2">
						<van-grid-item>
							<van-cell center :title="$t('message.grid1')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.amount1 !== null"
										class="text-ellipsis">{{ wallet.amount1 }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell center :title="$t('message.grid2')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.my_sl !== null">{{ wallet.my_sl }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell center :title="$t('message.grid3')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.min !== null" class="text-ellipsis">{{ wallet.min }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell center :title="$t('message.grid4')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.max !== null" class="text-ellipsis">{{ wallet.max }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell center :title="$t('message.grid5')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.all_sl !== null">{{ wallet.all_sl }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell center :title="$t('message.grid6')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.bd !== null">{{ wallet.bd }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell center :title="$t('message.grid7')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.rewardBnb !== null">{{ wallet.rewardBnb }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell center :title="$t('message.grid8')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.amount2 !== null">{{ wallet.amount2 }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
					</van-grid>
					<van-row align="center">
						<van-cell center :title="$t('message.grid9')" style="padding-left: 13px;" title-class="" title-style="flex: 0.3"
							:value-class="darkWhite">
							<template #value>
								<view style="padding-right: 5px;">
									<span v-if="wallet.first_leader !== null">{{ wallet.first_leader || $t('message.none') }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</view>
							</template>
						</van-cell>
					</van-row>
				</view>
				<view class="mt-2.5">
					<van-tabs>
						<van-tab :title="$t('message.myinvite')">
							<view class="mb-2.5">
								<van-cell-group v-if="wallet.invite_url !== null">
									<van-field autosize type="textarea" :clearable="true" v-model="wallet.invite_url"
										readonly />
									<view class="text-center pb-2 pt-2">
										<van-row>
											<van-col span="24">
												<van-button type="success" size="small" @tap="copy(wallet.invite_url)">{{ $t('message.copy_invite') }}
												</van-button>
											</van-col>
										</van-row>
									</view>
								</van-cell-group>
								<view v-else>
									<van-empty
									  :image="emptyImg"
									  image-size="60"
									  description=""
									/>
								</view>
							</view>
						</van-tab>
					</van-tabs>
				</view>
				<view class="pb-32">
					<van-tabs v-model:active="tab" @change="tabChange">
						<van-tab :title="$t('message.take_reward')">
							<view class="mt-2.5 mb-2.5">
								<van-cell-group>
									<van-field type="number" :clearable="true" v-model="amount" :label="$t('message.take_number')"
										:placeholder="$t('message.please_take_number')" label-align="center" center>
										<template #button>
										  <van-button size="small" plain type="default" @tap="allAmount">{{ $t('message.all') }}</van-button>
										</template>
									</van-field>
								</van-cell-group>
							</view>
							<view class="text-center">
								<van-row>
									<van-col span="24">
										<van-button type="primary" size="small" @tap="withdraw">{{ $t('message.take_now') }}</van-button>
									</van-col>
								</van-row>
							</view>
						</van-tab>
						<van-tab :title="$t('message.extract_records')">
							<van-empty image-size="80" :description="$t('message.no_data')" v-if="!wallet.withdraw_list" />
							<view class="mt-2" v-else>
								<van-row class="text-center text-xs text-gray-500">
									<van-col span="6" class="text-ellipsis">{{ $t('message.time') }}</van-col>
									<van-col span="6">{{ $t('message.number') }}</van-col>
									<van-col span="6">{{ $t('message.status') }}</van-col>
									<van-col span="6" class="text-ellipsis">{{ $t('message.reason') }}</van-col>
								</van-row>
								<van-row v-for="v in wallet.withdraw_list" :key="v.id"
									class="text-center text-xs text-gray-500 py-0.5" align="center" justify="center">
									<van-col span="6">{{ v.create_time }}</van-col>
									<van-col span="6">{{ v.amount }}</van-col>
									<van-col span="6" :class="v.status_class">{{ v.status }}</van-col>
									<van-col span="6">{{ v.remark || $t('message.none') }}</van-col>
								</van-row>
							</view>
						</van-tab>
						<van-tab :title="$t('message.income_details')">
							<van-empty image-size="80" :description="$t('message.no_data')" v-if="!wallet.money_log_list" />
							<view class="mt-2" v-else>
								<van-row class="text-center text-xs text-gray-500">
									<van-col span="8">{{ $t('message.type') }}</van-col>
									<van-col span="8">{{ $t('message.amount') }}</van-col>
									<van-col span="8">{{ $t('message.time') }}</van-col>
								</van-row>
								<van-row v-for="v in wallet.money_log_list" :key="v.id"
									class="text-center text-xs text-gray-500 py-0.5" align="center" justify="center">
									<van-col span="8">{{ item.mtype }}</van-col>
									<van-col span="8">{{ item.amount }}</van-col>
									<van-col span="8">{{ item.create_time }}</van-col>
								</van-row>
							</view>
						</van-tab>
					</van-tabs>
				</view>
			</view>
		</van-config-provider>
	</view>
</template>
<style>
	body {
		--van-button-default-border-color: unset;
	}
</style>
