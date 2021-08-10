'use-strict';

module.exports = {
  /**
   * Say hello to the user
   * [GET] /sample/hello
   *
   * @param {import('koa').Context} ctx
   * @return {Promise<void>}
   */
  hello: async (ctx) => {
    ctx.body = 'Hello World!';
  },

  /**
   * Return empty 200 response
   * [PUT] /sample/empty
   *
   * @param {import('koa').Context} ctx
   * @return {Promise<void>}
   */
  empty: async (ctx) => {
    ctx.send = 200;
  },
};
