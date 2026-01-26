import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import type { ProxyOptions, UserConfig } from 'vite'

const proxyConfig: Record<string, ProxyOptions> = {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
  },
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: proxyConfig,
  },
} as UserConfig)
