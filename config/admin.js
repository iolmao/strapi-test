module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  // Aggiungi queste configurazioni per Railway
  url: env('STRAPI_ADMIN_CLIENT_URL', '/admin'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  autoOpen: false,
  watchIgnoreFiles: [
    './admin/src/**',
    './admin/dist/**'
  ]
});
