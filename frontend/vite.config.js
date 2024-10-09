import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows Vite to be accessible externally (from the host system)
    port: 3000,       // Ensure this matches the port in your docker-compose.yml
    strictPort: true  // Ensures Vite will exit if port 3000 is unavailable
  }
})
