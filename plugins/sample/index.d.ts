import type { SamplePluginControllers } from './controllers';
import type { SamplePluginMiddlewares } from './middlewares';
import type { SamplePluginServices } from './services';
export * as models from './models';

export interface SamplePlugin {
  controllers: SamplePluginControllers;
  middlewares: SamplePluginMiddlewares;
  services: SamplePluginServices;
}

declare global {
  /**
   * Register SamplePlugin into StrapiPlugins global scope.
   *
   * @example strapi.plugins.sample: SamplePlugin
   */
  interface StrapiPlugins {
    sample: SamplePlugin;
  }
}
