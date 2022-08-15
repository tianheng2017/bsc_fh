import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	base: '/mobile/',
	server: {
		host: '0.0.0.0'
	},
	plugins: [
		uni(),
		Components({
			resolvers: [VantResolver()],
		}),
	],
	build: {
		target: [
			'es2015'
		],
		assetsDir: 'assets',
	},
    css: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer')
            ]
        }
    }
})
