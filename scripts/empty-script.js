#!node

const handleCliError = require('./utils/handleCliError.js');
const loadApp = require('./utils/loadApp.js');

/**
 * @return {Promise<void>}
 */
async function runner() {
  await loadApp();

  strapi.log.debug('[cli] started');

  strapi.stop(1);
  strapi.log.error('this is unreachable code');
}

runner()
  .then(() => process.exit(0))
  .catch(handleCliError);
