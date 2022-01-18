import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    })
  ],
  resolve: {
    alias: {
      '@/': new URL('./src', import.meta.url).pathname,
      '@views': new URL('src/views', import.meta.url).pathname,
      '@router': new URL('src/router', import.meta.url).pathname,
      '@store': new URL('src/store', import.meta.url).pathname,
      '@assets': new URL('src/assets', import.meta.url).pathname,
      '@components': new URL('src/components', import.meta.url).pathname
    }
  }
})
