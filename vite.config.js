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
      '@styles': path.resolve(__dirname, './src/styles'),
      '@data': path.resolve(__dirname, './src/data'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@exports': path.resolve(__dirname, './src/modules/exports'),
      '@utils-scss': path.resolve(__dirname, './src/styles/utils/utils.scss'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        api: 'modern-compiler',
      },
    },
  },
});
