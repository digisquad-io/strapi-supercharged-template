/**
 * @param {import('/@internal/config').StrapiConfigContext} context
 * @return {import('/@internal/config').StrapiConfigDatabase}
 */
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('STRAPI_DB_CLIENT', 'sqlite'),
        filename: env('STRAPI_DB_FILENAME', '.tmp/data.db'),
        host: env('STRAPI_DB_HOST'),
        port: env.int('STRAPI_DB_PORT'),
        database: env('STRAPI_DB_DATABASE'),
        username: env('STRAPI_DB_USERNAME'),
        password: env('STRAPI_DB_PASSWORD'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
