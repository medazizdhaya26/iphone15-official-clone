import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/iphone15-official-clone/',

  plugins: [react(), sentryVitePlugin({
  })],

  build: {
    sourcemap: true
  }
})
