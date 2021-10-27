/**
 * @param {import('strapi-supercharged').StrapiConfigContext} context
 * @return {import('strapi-supercharged').StrapiConfigMiddlewares}
 */
module.exports = ({}) => ({
  load: {
    after: [],
    before: [],
    order: [],
  },
  settings: {
    cors: {
      enabled: true,
    },
    sample: {
      enabled: true,
    },
  },
});
