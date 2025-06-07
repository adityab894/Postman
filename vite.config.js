import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'https://postman-backend-omega.vercel.app',
        changeOrigin: true,
        secure: true,
        credentials: true
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-hook-form',
      '@hookform/resolvers/zod',
      'zod',
      '@radix-ui/react-select',
      '@radix-ui/react-checkbox'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})
