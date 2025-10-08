import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // ensures Vite fails if port is busy
    fs: {
      strict: false // relax file system restrictions (OneDrive friendly)
    }
  }
});

