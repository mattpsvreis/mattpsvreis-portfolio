import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@libs': path.resolve(__dirname, './src/libs'),
      '@model': path.resolve(__dirname, './src/model'),
      '@services': path.resolve(__dirname, './src/services'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
    },
  },
  plugins: [react()],
});
