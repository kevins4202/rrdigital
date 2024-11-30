import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    target: 'esnext',  // Set to 'esnext' to enable modern features like top-level await
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://fly.io/apps/backend-wispy-night-1838',
        changeOrigin: true,
      } 
    },
  }
})
