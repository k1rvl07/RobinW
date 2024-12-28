import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@svg': path.resolve(__dirname, './src/assets/svg'),
      '@img': path.resolve(__dirname, './src/assets/img'),
      '@style_scss': path.resolve(__dirname, './src/style_scss'),
      '@data': path.resolve(__dirname, './src/data'),
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