// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Força uso do esbuild em vez de @swc/core
      jsxImportSource: undefined,          // ou remova se existir
      swc: false,                          // ← desabilita SWC
    }),
    tailwindcss(),
  ],
})
