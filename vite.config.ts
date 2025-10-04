import pug from '@vituum/vite-plugin-pug';
import { join } from 'path';
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
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), 'node_modules/$1'),
      },
    ],
  },
});
