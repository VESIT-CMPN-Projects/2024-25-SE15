import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  },
  // Add this to help with routing in development
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Expose environment variables to the client
  define: {
    'process.env.REACT_APP_GROQ_API_KEY': JSON.stringify(process.env.REACT_APP_GROQ_API_KEY)
  },
  // Handle build optimizations
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
});
