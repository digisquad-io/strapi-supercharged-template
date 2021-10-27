/**
 * @param {import('strapi-supercharged').StrapiConfigContext} context
 * @return {import('strapi-supercharged').StrapiConfigPlugins}
 */
module.exports = ({}) => ({
  sample: {
    enabled: true,
    optionalString: 'optional',
  },
});
