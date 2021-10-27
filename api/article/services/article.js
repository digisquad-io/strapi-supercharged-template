'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Fetch articles related to a product from sample plugin
   *
   * @param {Pick<import('/@plugins/sample/models').Product, 'id'>} product
   * @return {Promise<
   *  import('/@api/article/models').Article[]
   * >}
   */
  articlesByProduct({ id }) {
    /**
     * @type {import('/@internal/query').StrapiQuery<
     *  import('/@api/article/models').Article
     * >}
     */
    const query = strapi.query('article', 'sample');

    return query.find({
      products: id,
    });
  },
};
