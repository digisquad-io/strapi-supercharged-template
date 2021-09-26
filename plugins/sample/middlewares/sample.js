/**
 * @typedef {import('/@internal/base').StrapiBaseMiddleware} StrapiBaseMiddleware
 */

const createJoiRouter = require('koa-joi-router');

/**
 * Create router to handle `[GET] /sample/middleware` requests.
 *
 * @return {ReturnType<createJoiRouter>}
 */
function createRouter() {
  const router = createJoiRouter();

  router.get('/sample/middleware', (ctx) => {
    ctx.body = 'Hello Middleware!';
  });

  return router;
}

/**
 * Sample middleware.
 * It inject a new koa-joi-router instance into strapi app.
 *
 * @return {StrapiBaseMiddleware}
 */
function sampleMiddleware() {
  return {
    initialize() {
      strapi.log.debug(`[sample][middleware] initialize`);
      const router = createRouter();

      strapi.app.use(router.middleware());
    },
  };
}

module.exports = sampleMiddleware;
