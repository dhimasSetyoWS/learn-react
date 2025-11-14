import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    proxy : {
      // ini gunanya agar ketika ada request ke /api, maka dia akan redirect ke target yang ada di bawah
      "/api" : {
        target : "http://localhost:3000"
      },
      "/images" : {
        target : "http://localhost:3000"
      }
    }
  }
})
