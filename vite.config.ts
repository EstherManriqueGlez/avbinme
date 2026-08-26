import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/avbinme/',
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/utils/variables"; @import "@/styles/utils/mixins";`,
        // api: 'modern',
        silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
      },
    },
  },
})
