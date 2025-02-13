import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0
    port: 3000, // You can specify any port here
    allowedHosts: ['contact-1-hcf4.onrender.com'], // Add your host here
  }
});
