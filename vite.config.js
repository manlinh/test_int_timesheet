import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/test_int_timesheet/',
  plugins: [react()],
})
