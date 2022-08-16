import { createI18n } from 'vue-i18n'
import zhCN from '@/language/zhCN.json'
import zhHK from '@/language/zhHK.json'
import jaJP from '@/language/jaJP.json'
import koKR from '@/language/koKR.json'

const getCurrentLanguage = () => {
    const language = navigator.language
    const currentLanguage = language.indexOf('zh') !== -1 ? 'zhCN' : 'zhCN'
    localStorage.setItem('language', currentLanguage)
	console.log(currentLanguage)
    return currentLanguage
}

export const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: localStorage.getItem("language") || getCurrentLanguage() || "zhCN",
	fallbackLocale: "zhCN",
	messages: {
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