import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/components'),
      '@src': path.resolve(__dirname, 'src/'),
    },
  },
  server: {
    port: 8080,
    // host: '192.168.50.238',
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
    legacy({
      targets: ['defaults', 'not IE 9'],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]',
    }),
  ],
});
