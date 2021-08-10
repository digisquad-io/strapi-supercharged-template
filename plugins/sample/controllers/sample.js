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
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
    await new Promise((resolve) => setTimeout(resolve, 1000));

    ctx.send = 200;
  },
};
