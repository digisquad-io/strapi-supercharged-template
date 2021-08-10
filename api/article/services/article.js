'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Fetch articles related to a product from sample plugin
   *
   * @param {Pick<import('/@plugins/sample/models/product').default, 'id'>} product
   * @return {Promise<
   *  import('../models/article').default[]
   * >}
   */
  articlesByProduct({ id }) {
    /**
     * @type {import('/@internal/query').StrapiQuery<
     *  import('../models/article').default
     * >}
     */
    const query = strapi.query('article', 'sample');

    return query.find({
      product: id,
    });
  },
};
