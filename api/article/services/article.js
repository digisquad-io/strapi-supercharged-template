'use strict';

/**
 * @template T
 * @typedef {import('strapi-supercharged').StrapiQuery<T>} StrapiQuery
 */

/**
 * @typedef {import('/@plugins/sample/models').Product} Product
 * @typedef {import('/@api/article/models').Article} Article
 */

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Fetch articles related to a product from sample plugin
   *
   * @param {Pick<Product, 'id'>} product
   * @return {Promise<Article[]>}
   */
  articlesByProduct({ id }) {
    /**
     * @type {StrapiQuery<Article>}
     */
    const query = strapi.query('article', 'sample');

    return query.find({
      products: id,
    });
  },
};
