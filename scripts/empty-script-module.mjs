#!node

// load CommonJS module
import handleCliErrorModule from './utils/handleCliError.js';
import loadAppModule from './utils/loadApp.js';

const { handleCliError } = handleCliErrorModule;
const { loadApp } = loadAppModule;

/**
 * @return {Promise<void>}
 */
async function runner() {
  await loadApp();
  strapi.log.debug('[cli] started');

  // simulate heavy tasks
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

// use top level await ! (require node 14.8.x)
try {
  await runner();
} catch (err) {
  handleCliError(err);
}

strapi.log.debug('[cli] ended');
process.exit(0);
