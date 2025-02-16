import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),            // (Vue나 Svelte 등 다른 플러그인을 사용 중이면 그에 맞춰 import)
    tailwindcss(),
  ],
})