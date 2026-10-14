import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the domain root (www.davinlaiacoma.com), so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
