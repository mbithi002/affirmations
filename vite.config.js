import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/affirmation': {
        target: 'https://www.affirmations.dev',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/affirmation/, '')
      }
    }
  }
})
