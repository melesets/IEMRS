import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/iemrs/',
  plugins: [react()],
  envDir: path.resolve(__dirname, '..'),
  server: {
    port: 4002,
    strictPort: true,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
})
