import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages project sites are served from /<repo>/. Use root during dev.
  base: command === 'build' ? '/Tether-Digital/' : '/',
  plugins: [
    tailwindcss(),
    react(),
  ],
}))
