/**
 * @param {import('/@internal/config').StrapiConfigContext} context
 * @return {import('/@internal/config').StrapiConfigPlugins}
 */
module.exports = ({}) => ({
  sample: {
    enabled: true,
    optionalString: 'optional',
  },
});
