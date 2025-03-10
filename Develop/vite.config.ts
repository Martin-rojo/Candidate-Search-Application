import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './',
  plugins: [react()],
  server: {
    host: true,
    port: Number(process.env.PORT) || 3000,
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 3000,
    allowedHosts: [
      'candidate-search-application-op8c.onrender.com',
      '*.onrender.com'
    ]
  }
});