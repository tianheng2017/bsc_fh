import { createSSRApp } from "vue"
import App from "./App.vue"
import { createPinia } from 'pinia'
import { i18n } from '@/language/index'
import VueCookies from 'vue-cookies'
import layer from '@layui/layer-vue'
import '@layui/layer-vue/lib/index.css'
import '@vant/touch-emulator'
import 'vant/lib/index.css'
import '@/assets/css/style.css'

export function createApp() {
	
	const app = createSSRApp(App)
	
	app.config.globalProperties.$cookies = VueCookies
	
    app.use(createPinia())
	.use(layer)
	.use(i18n)
	
	return {
		app,
	}
}