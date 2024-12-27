import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '',
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/react/components'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@style_scss': path.resolve(__dirname, 'src/style_scss'),
      '@data': path.resolve(__dirname, 'src/data'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        api: "modern-compiler"
      },
    },
  },
});