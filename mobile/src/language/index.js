import { Locale } from 'vant'
import { createI18n } from 'vue-i18n'

import enUS from '@/language/enUS.json'
import zhCN from '@/language/zhCN.json'
import zhHK from '@/language/zhHK.json'
import jaJP from '@/language/jaJP.json'
import koKR from '@/language/koKR.json'

import enUSs from 'vant/es/locale/lang/en-US'
import zhCNs from 'vant/es/locale/lang/zh-CN'
import zhHKs from 'vant/es/locale/lang/zh-HK'
import jaJPs from 'vant/es/locale/lang/ja-JP'
import koKRs from 'vant/es/locale/lang/ko-KR'

export const getCurrentLanguage = () => {
	return localStorage.getItem("language") || "enUS"
}

export const changeSystemLanguage = (language) => {
	let lable = 'en-US'
	let value = enUSs
	
	switch (language){
		case 'zhCN':
			lable = 'zh-CN'
			value = zhCNs
			break
		case 'zhHK':
			lable = 'zh-HK'
			value = zhHKs
			break
		case 'jaJP':
			lable = 'ja-JP'
			value = jaJPs
			break
		case 'koKR':
			lable = 'ko-KR'
			value = koKRs
			break
		default:
			break;
	}
	return [lable, value]
}

export const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: getCurrentLanguage(),
	fallbackLocale: "enUS",
	messages: {
		enUS: {
			message: enUS
		},
		zhCN: {
			message: zhCN
		},
		zhHK: {
			message: zhHK
		},
		jaJP: {
			message: jaJP
		},
		koKR: {
			message: koKR
		}
	}
})

const labelAndValue = changeSystemLanguage(getCurrentLanguage())
Locale.use(labelAndValue[0], labelAndValue[1])