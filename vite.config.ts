import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import mocker from 'unplugin-mock/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const ENV = loadEnv(mode, process.cwd())

	return {
		plugins: [
			react(),

			mocker({
				mockPath: './mock',
				enable: true
			})
		],
		css: {
			modules: {
				generateScopedName: '[local]-[hash:base64:5]'
			}
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src')
			}
		},
		server: {
			host: '127.0.0.1',
			port: 3000,
			open: true,
			https: false,
			proxy: {
				'/api': {
					target: ENV.VITE_API_URL || 'https://some-api-url',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '/api'),
					secure: false
				}
			}
		}
	}
})
