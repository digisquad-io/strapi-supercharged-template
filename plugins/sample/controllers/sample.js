/**
 * @typedef {import('/@internal/core').StrapiAppContext} StrapiAppContext
 */

module.exports = {
  /**
   * Say hello to the user
   * [GET] /sample/hello
   *
   * @param {StrapiAppContext} ctx
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
   * @param {StrapiAppContext} ctx
   * @return {Promise<void>}
   */
  empty: async (ctx) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    ctx.send = 200;
  },
};
