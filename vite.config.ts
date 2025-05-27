import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/common/components'),
      '@assets': resolve(__dirname, 'src/common/assets'),
      '@apis': resolve(__dirname, 'src/common/apis'),
      '@http': resolve(__dirname, 'src/common/http'),
      '@utils': resolve(__dirname, 'src/common/utils'),
    },
  },
})
