/**
 * @param {import('/@internal/config').default} context
 * @return {any}
 */
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env(
        'ADMIN_JWT_SECRET',
        '01c6c1580e1fa8e45bf746dd9372c98d'
      ),
    },
  },
});
