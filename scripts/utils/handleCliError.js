/**
 * @param {Error} error
 * @param {number} exitCode
 * @return {never}
 */
module.exports = function handleCliError(error, exitCode = 1) {
  console.log('er', error);
  strapi?.log?.error(`[cli] an error occured`, error);
  process.exit(exitCode);
};
