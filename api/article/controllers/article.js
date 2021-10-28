'use strict';

/**
 * @typedef {import('strapi-supercharged').StrapiAppContext} StrapiAppContext
 * @typedef {import('/@api/article/models').Article} Article
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @param {StrapiAppContext} ctx
   * @return {Promise<Partial<Article>[]>}
   */
  async find(ctx) {
    let articles = [];
    if (ctx.query._q) {
      articles = await strapi.services.article.search(ctx.query);
    } else {
      articles = await strapi.services.article.find(ctx.query);
    }

    return articles.map((article) =>
      sanitizeEntity(article, { model: strapi.models.article })
    );
  },

  /**
   * List articles related to a product
   * [GET] /articles/product/:id
   *
   * @param {StrapiAppContext} ctx
   * @return {Promise<Partial<Article>[]>}
   */
  async findByProduct(ctx) {
    const { id } = ctx.params;

    const articles = await strapi.services.article.articlesByProduct({
      id,
    });

    return articles.map((article) =>
      sanitizeEntity(article, { model: strapi.models.article })
    );
  },

  /**
   * This method raise TS2322 error
   *
   * @return {Article}
   */
  thisRaiseTSError() {
    return {
      // @ts-expect-error
      foo: 'bar',
    };
  },
};
