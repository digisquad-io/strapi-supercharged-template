const path = require('path');

module.exports = {
  /**
   * @return {Promise<void>}
   */
  async loadApp() {
    const projectPath = process.cwd();

    const strapi = require(require.resolve('strapi', {
      paths: [projectPath],
    }));

    const pkgJSON = require(path.resolve(
      projectPath,
      'package.json'
    ));
    if (
      !pkgJSON ||
      !pkgJSON?.dependencies ||
      !pkgJSON?.dependencies.strapi
    ) {
      throw new Error(
        'Unable to load app: missing strapi dependencies from "package.json"'
      );
    }

    // load() will register strapi in global scope
    await strapi({ dir: projectPath, serveAdminPanel: false }).load();
  },
};
