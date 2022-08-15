import { createSSRApp } from "vue"
import App from "./App.vue"
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import layer from '@layui/layer-vue'
import '@layui/layer-vue/lib/index.css'
import '@vant/touch-emulator'
import 'vant/lib/index.css'
import '@/asset/css/style.css'

export function createApp() {
	
	const app = createSSRApp(App)
	app.config.globalProperties.$cookies = VueCookies
    app.use(createPinia()).use(layer)
	
	return {
		app,
	}
}