// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'frontend', // 👈 tell vite where index.html lives
  build: {
    outDir: '../dist', // output folder
  },
  plugins: [react()],
})
