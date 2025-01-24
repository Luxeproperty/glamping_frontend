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
      webp: { quality: 70 }
    })
  ],
  build: {
    chunkSizeWarningLimit: 800,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom'))
              return 'react';
            if (id.includes('react-router')) return 'router';
            if (id.includes('framer-motion')) return 'motion';
            if (
              id.includes('react-hook-form') ||
              id.includes('hookform') ||
              id.includes('zod')
            )
              return 'form';
            if (id.includes('embla-carousel')) return 'carousel';
            if (id.includes('@radix-ui')) return 'radix';
            if (id.includes('lucide-react') || id.includes('react-icons'))
              return 'icons';
            if (id.includes('@tsparticles')) return 'particles';
            return 'vendor';
          }
        }
      }
    }
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
});
