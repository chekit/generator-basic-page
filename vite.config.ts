import pug from '@vituum/vite-plugin-pug';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [pug()],
  build: {
    rollupOptions: {
      input: ['index.pug.html'],
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3001,
  },
});
