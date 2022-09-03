import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/components'),
      '@src': path.resolve(__dirname, 'src/'),
    },
  },
  server: {
    port: 8080,
    host: '192.168.50.238',
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      ecma: 5,
    },
  },
  plugins: [
    react(),
    svgr(),
    legacy({
      targets: ['defaults', 'not IE 9'],
    }),
  ],
});
