import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 1337,
    allowedHosts: [
      'strapi-production-6792.up.railway.app',
      'localhost',
      '.railway.app'
    ]
  }
});
