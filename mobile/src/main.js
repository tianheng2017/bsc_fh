import { createSSRApp } from "vue"
import { createI18n } from 'vue-i18n'
import App from "./App.vue"
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import layer from '@layui/layer-vue'
import '@layui/layer-vue/lib/index.css'
import '@vant/touch-emulator'
import 'vant/lib/index.css'
import '@/assets/css/style.css'
import zhCN '@config/language/zhCN.js'
import zhHK '@config/language/zhHK.js'
import jaJP '@config/language/jaJP.js'
import koKR '@config/language/koKR.js'

export function createApp() {
	
	const i18n = createI18n({
		locale: 'zhCN',
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
	
	const app = createSSRApp(App)
	app.config.globalProperties.$cookies = VueCookies
    app.use(createPinia()).use(layer).use(i18n)
	
	return {
		app,
	}
}