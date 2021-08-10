const createJoiRouter = require('koa-joi-router');

function createRouter() {
  const router = createJoiRouter();

  router.get('/sample/middleware', async (ctx) => {
    ctx.body = 'Hello Middleware!';
  });

  return router;
}

module.exports = function sampleMiddleware() {
  return {
    initialize() {
      strapi.log.debug(`[sample][middleware] initialize`);
      const router = createRouter();

      strapi.app.use(router.middleware());
    },
  };
};
