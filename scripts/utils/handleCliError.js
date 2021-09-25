module.exports = {
  /**
   * @param {Error} error
   * @param {number} exitCode
   * @return {never}
   */
  handleCliError(error, exitCode = 1) {
    if (typeof strapi === 'undefined') {
      console.error(
        `[cli] unable to locate strapi from package.json`
      );
      console.error(error);
    } else {
      strapi.log.error(`[cli] an error occured`);
      strapi.log.error(error);
    }
    return process.exit(exitCode);
  },
};
