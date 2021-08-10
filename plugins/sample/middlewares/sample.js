const createJoiRouter = require('koa-joi-router');

/**
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
 * @return {import('/@internal/core').StrapiMiddlewareDefinition}
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
