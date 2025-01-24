import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      mozjpeg: { quality: 65 },
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      // webp: { quality: 100 }
    })
  ],
  build: {
    chunkSizeWarningLimit: 800,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-core': [
            'react',
            'react-dom',
            'react-router-dom',
            '@radix-ui/react-slot',
            '@radix-ui/react-context'
          ],
          form: ['react-hook-form', '@hookform/resolvers', 'zod'],
          animation: ['framer-motion'],
          ui: [
            '@radix-ui/react-collapsible',
            '@radix-ui/react-label',
            '@radix-ui/react-navigation-menu'
          ],
          carousel: [
            'embla-carousel-react',
            'embla-carousel-autoplay',
            'embla-carousel-fade'
          ],
          icons: ['lucide-react', 'react-icons'],
          particles: [
            '@tsparticles/engine',
            '@tsparticles/react',
            '@tsparticles/slim'
          ]
        }
      }
    }
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
});