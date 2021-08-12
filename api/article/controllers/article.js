'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * List articles related to a product
   * [GET] /articles/product/:id
   *
   * @param {import('/@internal/core').StrapiAppContext} ctx
   * @return {Promise<
   *  import('/@api/article/models').Article[]
   * >}
   */
  async findByProduct(ctx) {
    const { id } = ctx.params;

    const articles = await strapi.services.article.articlesByProduct({
      id,
    });

    return articles;
  },
};
