/**
 * @param {import('/@internal/config').StrapiConfigContext} context
 * @return {import('/@internal/config').StrapiConfigMiddlewares}
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
