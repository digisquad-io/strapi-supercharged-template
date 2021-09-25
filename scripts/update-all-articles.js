#!node

const handleCliError = require('./utils/handleCliError.js');
const loadApp = require('./utils/loadApp.js');

/**
 * @yields {import('/@api/article/models').Article}
 */
async function* getArticles() {
  const total = await strapi.services.article.count();
  const limit = 50;

  let from = 0;
  let done = 0;

  while (done < total) {
    const articles = await strapi.services.article.find({
      _limit: limit,
      _start: from,
    });

    for (const article of articles) {
      yield article;
    }

    from += limit;
    done += articles.length;
  }
}

/**
 * @return {Promise<void>}
 */
async function runner() {
  await loadApp();

  strapi.log.debug('[update-all-articles] started');

  for await (const article of getArticles()) {
    try {
      await strapi.services['product-stock'].update(
        { id: article.id },
        {
          name: article.name + ' updated!',
        }
      );
    } catch (error) {
      strapi.log.error(`[update-all-articles] an error occured`);
      strapi.log.error(error);
    }
  }

  strapi.log.error('[update-all-articles] all articles up to date');
}

runner()
  .then(() => process.exit(0))
  .catch(handleCliError);
