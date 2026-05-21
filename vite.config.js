import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'es2020',
    chunkSizeWarningLimit: 700,
    reportCompressedSize: false,
    sourcemap: false,
  },
})
