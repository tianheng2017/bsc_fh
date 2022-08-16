<script setup>
	import {
		showDialog,
		showConfirmDialog,
	} from 'vant'
	import {
		onMounted,
		ref,
		watch,
		computed
	} from 'vue'
	import { useI18n } from 'vue-i18n'
	import {
		useWallet
	} from '@/stores/wallet'
	import {
		layer
	} from '@layui/layer-vue'
	import useClipboard from 'vue-clipboard3'
	import walletImg from '@/assets/images/wallet.png'
	import darkImg from '@/assets/images/dark-theme.svg'
	import lightImg from '@/assets/images/light-theme.svg'
	import languageImg from '@/assets/images/language.png'
	import emptyImg from '@/assets/images/empty.png'
	
	const i18n = useI18n()
	const onSelect = (action) => {
		localStorage.setItem('language', action.value)
		i18n.locale.value = action.value
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

	const wallet = useWallet()

	onMounted(async () => {
		await setTimeout(async () => {
			await wallet.init()
		}, 300)
	})

	const tab = ref(0)
	const amount = ref('')
	const withdraw = () => {
		const check = wallet.checkWallet()
		if (check !== true) {
			return showDialog({
				message: check.message,
			})
		}

		if (amount.value == '') {
			return layer.msg("请输入提取数量", {
				icon: 2,
				time: 2000
			})
		}

		showConfirmDialog({
				title: '提示',
				message: '确定提取 ' + amount.value + ' BNB收益？',
			})
			.then(() => {
				wallet.doWithdraw(amount.value)
			})
	}

	const tabChange = (e) => {
		if (e == 1) {
			wallet.getWithdrawList()
		} else if (e == 2) {
			wallet.getMoneyLogList()
		}
	}

	const themeVars = {
		NavBarBackground: '#1C1C1E',
		NavBarTitleTextColor: '#FFF',
		NotifyLineHeight: '46px',
		FieldTextAreaMinHeight: '300px',
		CellHorizontalPadding: '5px',
		DropdownItemZIndex: 999,
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
		amount.value = wallet.amount1 || ''
	}

	const {
		toClipboard
	} = useClipboard()
	const copy = async (val) => {
		try {
			const check = wallet.checkWallet()
			if (check !== true) {
				return showDialog({
					message: check.message,
				})
			}
			await toClipboard(val)
			return layer.msg("复制成功", {icon: 1})
		} catch (e) {
			return layer.msg('复制失败：' + e.message, {icon: 2})
		}
	}

	const showPopover = ref(false);
	const actions = [{
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
	
</script>

<template>
	<view :class="{'bg-black': theme == 'dark'}">
		<van-config-provider :theme-vars="themeVars" :theme="theme">
			<van-nav-bar title="BSC Dapp" safe-area-inset-top>
				<template #right>
					<van-row gutter="15">
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
						{{ wallet.sortAddress || '加载中...' }}
					</view>
				</van-row>
				<view class="mt-2">
					<van-grid :column-num="2">
						<van-grid-item>
							<van-cell :title="$t('message.grid1')" title-class="text-xs" :value-class="darkWhite">
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
							<van-cell :title="$t('message.grid2')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.my_sl !== null">{{ wallet.my_sl }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell :title="$t('message.grid3')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.min !== null" class="text-ellipsis">{{ wallet.min }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell :title="$t('message.grid4')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.max !== null" class="text-ellipsis">{{ wallet.max }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell :title="$t('message.grid5')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.all_sl !== null">{{ wallet.all_sl }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell :title="$t('message.grid6')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.bd !== null">{{ wallet.bd }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell :title="$t('message.grid7')" title-class="text-xs" :value-class="darkWhite">
								<template #value>
									<span v-if="wallet.rewardBnb !== null">{{ wallet.rewardBnb }}</span>
									<span v-else>
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell :title="$t('message.grid8')" title-class="text-xs" :value-class="darkWhite">
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
						<van-cell :title="$t('message.grid9')" style="padding-left: 13px;" title-class="" title-style="flex: 0.3"
							:value-class="darkWhite">
							<template #value>
								<view style="padding-right: 5px;">
									<span v-if="wallet.first_leader !== null">{{ wallet.first_leader || '无' }}</span>
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
						<van-tab title="我的推广链接">
							<view class="mb-2.5" @tap="copy(wallet.invite_url)">
								<van-cell-group v-if="wallet.invite_url !== null">
									<van-field autosize type="textarea" :clearable="true" v-model="wallet.invite_url"
										readonly />
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
						<van-tab title="提取收益">
							<view class="mt-2.5 mb-2.5">
								<van-cell-group>
									<van-field type="number" :clearable="true" v-model="amount" label="提取数量"
										placeholder="请输入提取数量" label-align="center" center>
										<template #button>
										  <van-button size="small" plain type="default" @tap="allAmount">全部</van-button>
										</template>
									</van-field>
								</van-cell-group>
							</view>
							<view class="text-center">
								<van-row>
									<van-col span="24">
										<van-button type="primary" size="small" @tap="withdraw">立即提取</van-button>
									</van-col>
								</van-row>
							</view>
						</van-tab>
						<van-tab title="提取记录">
							<van-empty image-size="80" description="暂无数据" v-if="!wallet.withdraw_list" />
							<view class="mt-2" v-else>
								<van-row class="text-center text-xs text-gray-500">
									<van-col span="6" class="text-ellipsis">时间</van-col>
									<van-col span="6">数量</van-col>
									<van-col span="6">状态</van-col>
									<van-col span="6" class="text-ellipsis">理由</van-col>
								</van-row>
								<van-row v-for="v in wallet.withdraw_list" :key="v.id"
									class="text-center text-xs text-gray-500 py-0.5" align="center" justify="center">
									<van-col span="6">{{ v.create_time }}</van-col>
									<van-col span="6">{{ v.amount }}</van-col>
									<van-col span="6" :class="v.status_class">{{ v.status }}</van-col>
									<van-col span="6">{{ v.remark || '无' }}</van-col>
								</van-row>
							</view>
						</van-tab>
						<van-tab title="收益明细">
							<van-empty image-size="80" description="暂无数据" v-if="!wallet.money_log_list" />
							<view class="mt-2" v-else>
								<van-row class="text-center text-xs text-gray-500">
									<van-col span="8">类型</van-col>
									<van-col span="8">金额</van-col>
									<van-col span="8">时间</van-col>
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
