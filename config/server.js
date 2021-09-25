/**
 * @param {import('/@internal/config').StrapiConfigContext} context
 * @return {import('/@internal/config').StrapiConfigServer}
 */
module.exports = ({ env }) => ({
  host: env('STRAPI_SERVER_HOST', '0.0.0.0'),
  port: env.int('STRAPI_SERVER_PORT', 1337),
  admin: {
    auth: {
      secret: env(
        'STRAPI_SERVER_ADMIN_JWT_SECRET',
        '01c6c1580e1fa8e45bf746dd9372c98d'
      ),
    },
  },
});
