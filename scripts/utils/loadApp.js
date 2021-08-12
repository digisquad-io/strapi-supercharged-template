const path = require('path');

/**
 * @return {Promise<void>}
 */
module.exports = async function loadApp() {
  const projectPath = process.cwd();

  const strapi = require(require.resolve('strapi', {
    paths: [projectPath],
  }));

  const pkgJSON = require(path.resolve(projectPath, 'package.json'));
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
  await strapi({ dir: projectPath }).load();
};
