import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'

export default ({ mode }: ConfigEnv) => {
  const ENV = loadEnv(mode, import.meta.url)
  return defineConfig({
    plugins: [
      vue(),
      styleImport({
        resolves: [VantResolve()]
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 1024 * 10,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],

    resolve: {
      alias: {
        '@/': new URL('src', import.meta.url).pathname,
        '@views': new URL('src/views', import.meta.url).pathname,
        '@router': new URL('src/router', import.meta.url).pathname,
        '@store': new URL('src/store', import.meta.url).pathname,
        '@assets': new URL('src/assets', import.meta.url).pathname,
        '@components': new URL('src/components', import.meta.url).pathname,
        '@utils': new URL('src/utils', import.meta.url).pathname,
        '@api': new URL('src/api', import.meta.url).pathname
      }
    },
    server: {
      port: ENV.VITE_PORT as unknown as number
    },

    build: {
      outDir: ENV.VITE_OUTPUT_DIR,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  })
}
