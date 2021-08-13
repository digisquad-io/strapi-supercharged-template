'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve records.
   *
   * @param {import('/@internal/core').StrapiAppContext} ctx
   * @return {Promise<
   *  import('/@api/article/models').Article[]
   * >}
   */
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.article.search(ctx.query);
    } else {
      entities = await strapi.services.article.find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.article })
    );
  },

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
