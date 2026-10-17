import {fileURLToPath, URL} from 'node:url'
import {copyFileSync, existsSync} from 'node:fs'
import {resolve} from 'node:path'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        {
            name: 'copy-404-for-gh-pages',
            closeBundle() {
                const distDir = fileURLToPath(new URL('./dist', import.meta.url))
                const indexFile = resolve(distDir, 'index.html')
                const notFoundFile = resolve(distDir, '404.html')
                if (existsSync(indexFile)) {
                    copyFileSync(indexFile, notFoundFile)
                }
            }
        }
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    base: '/TirageNoel/',
})
