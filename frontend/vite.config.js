import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import openBrowser from 'open' // Import the 'open' package correctly

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // This will automatically open the browser
    // If you need to programmatically open the browser:
    // async afterServerStart(server) {
    //   await openBrowser(`http://localhost:${server.config.server.port}`);
    // }
  },
  // Add this to help with routing in development
  resolve: {
    extensions: ['.js', '.jsx'],
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
