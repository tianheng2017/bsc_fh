<script setup>
	import {
		onMounted,
		ref,
		watch
	} from 'vue'
	import {
		useWallet
	} from '@/stores/wallet'
	import {
		Notify,
		Dialog,
		Toast,
	} from 'vant'
	import useClipboard from 'vue-clipboard3'
	import {
		layer
	} from '@layui/layer-vue'
	
	const getQueryString = (name) => {
	   const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
	   const r = window.location.search.substr(1).match(reg)
	   if(r != null) {
		   return unescape(r[2])
	   }
	   return null
	}
	
	const invite = getQueryString('invite')
	if (invite) {
		$cookies.config("0")
		$cookies.set("invite", invite)
	}

	const tab = ref(0)
	const amount = ref('')
	const withdraw = () => {
		const check = wallet.checkWallet()
		if (check !== true) {
			return Dialog.alert({
			    message: check.message,
			})
		}
		
		if (amount.value == '') {
			return layer.msg("请输入提取数量", {
				icon: 2,
				time: 2000
			})
		}
		Dialog.confirm({
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

	const wallet = useWallet()

	onMounted(async () => {
		await setTimeout(async () => {
			await wallet.init()
			await wallet.getUserInfo()
		}, 300)
	})

	const themeVars = {
		NotifyLineHeight: '46px',
		FieldTextAreaMinHeight: '300px'
	}

	const {
		toClipboard
	} = useClipboard()
	const copy = async (val) => {
		try {
			const check = wallet.checkWallet()
			if (check !== true) {
				return Dialog.alert({
					message: check.message,
				})
			}

			await toClipboard(val)
			Notify({
				type: 'success',
				message: '复制成功',
				className: 'notify',
			})
		} catch (e) {
			Notify({
				type: 'danger',
				message: '复制失败：' + e.message,
				className: 'notify',
			})
		}
	}
</script>

<template>
	<view>
		<van-config-provider :theme-vars="themeVars">
			<d-header title="BSC Dapp" />
			<view class="container mx-auto mt-2.5">
				<van-row align="center" class="px-2.5">
					<van-image radius="50%" width="50px" height="50px" src="/mobile/static/images/wallet.png" />
					<view class="pl-2 text-xs">
						{{ wallet.sortAddress || '加载中...' }}
					</view>
					<van-button plain type="primary" size="mini" @click="copy(wallet.address)" class="ml-2">
						复制
					</van-button>
				</van-row>
				<view class="mt-2">
					<van-grid :column-num="2">
						<van-grid-item>
							<van-cell title="代币(快照)" title-class="font-bold">
								<template #value>
									<span v-if="wallet.amount1 !== null"
										class="value-class text-ellipsis">{{ wallet.amount1 }}</span>
									<span v-else class="value-class">
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell title="BNB收益" title-class="font-bold">
								<template #value>
									<span v-if="wallet.amount2 !== null" class="value-class">{{ wallet.amount2 }}</span>
									<span v-else class="value-class">
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell title="小区业绩" title-class="font-bold">
								<template #value>
									<span v-if="wallet.min !== null"
										class="value-class text-ellipsis">{{ wallet.min }}</span>
									<span v-else class="value-class">
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell title="大区业绩" title-class="font-bold">
								<template #value>
									<span v-if="wallet.max !== null"
										class="value-class text-ellipsis">{{ wallet.max }}</span>
									<span v-else class="value-class">
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell title="直推人数" title-class="font-bold">
								<template #value>
									<span v-if="wallet.zhi !== null" class="value-class">{{ wallet.zhi }}</span>
									<span v-else class="value-class">
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
						<van-grid-item>
							<van-cell title="伞下人数" title-class="font-bold">
								<template #value>
									<span v-if="wallet.san !== null" class="value-class">{{ wallet.san }}</span>
									<span v-else class="value-class">
										<van-loading type="spinner" size="24px" />
									</span>
								</template>
							</van-cell>
						</van-grid-item>
					</van-grid>
					<van-row align="center" class="px-2.5">
						<van-cell title="我的上级" title-class="font-bold" title-style="flex: 0.3">
							<template #value>
								<span v-if="wallet.first_leader !== null"
									class="value-class">{{ wallet.first_leader || '无' }}</span>
								<span v-else class="value-class">
									<van-loading type="spinner" size="24px" />
								</span>
							</template>
						</van-cell>
					</van-row>
				</view>
				<view class="mt-2">
					<van-tabs>
						<van-tab title="我的推广链接">
							<view class="m-2.5">
								<van-cell-group>
									<van-field autosize type="textarea" :clearable="true" v-model="wallet.invite_url"
										readonly />
								</van-cell-group>
							</view>
							<view class="text-center">
								<van-row>
									<van-col span="24">
										<van-button type="success" size="small" @tap="copy(wallet.invite_url)">复制推广链接
										</van-button>
									</van-col>
								</van-row>
							</view>
						</van-tab>
					</van-tabs>
				</view>
				<view class="mt-2.5 pb-32">
					<van-tabs v-model:active="tab" @change="tabChange">
						<van-tab title="提取收益">
							<view class="m-2.5">
								<van-cell-group>
									<van-field type="number" :clearable="true" v-model="amount" label="提取数量"
										placeholder="请输入提取BNB收益的数量" />
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
							<van-empty description="暂无数据" v-if="!wallet.withdraw_list" />
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
							<van-empty description="暂无数据" v-if="!wallet.money_log_list" />
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
