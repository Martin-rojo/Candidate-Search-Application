import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './',
  plugins: [react()],
  server: {
    host: true,
    port: Number(process.env.PORT) || 0.0.0.0,
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 0.0.0.0,
  }
});
