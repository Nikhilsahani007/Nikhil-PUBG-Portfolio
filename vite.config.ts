import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js + React-Three into its own chunk (~2MB)
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          // Split animation library separately
          'vendor-motion': ['framer-motion'],
          // Split React core
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
