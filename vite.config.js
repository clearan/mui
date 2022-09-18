import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      },
    },
    lib: {
      entry: './packages/index.js', // 打包的入口文件
      name: 'clear-mui'
    }
  }
})
