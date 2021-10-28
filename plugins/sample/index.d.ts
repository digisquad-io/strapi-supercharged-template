import type { SamplePluginControllers } from './controllers';
import type { SamplePluginMiddlewares } from './middlewares';
import type { SamplePluginServices } from './services';
export * as models from './models';

import type { StrapiBasePlugin } from 'strapi-supercharged';
import type { StrapiConfigBasePluginSettings } from 'strapi-supercharged';

export interface SamplePluginConfig
  extends StrapiConfigBasePluginSettings {
  optionalString?: string;
}

export interface SamplePlugin extends StrapiBasePlugin {
  controllers: SamplePluginControllers;
  middlewares: SamplePluginMiddlewares;
  services: SamplePluginServices;
  config: SamplePluginConfig;
}

declare module 'strapi-supercharged' {
  /**
   * Register SamplePlugin into StrapiPlugins global scope.
   *
   * @example strapi.plugins.sample: SamplePlugin
   */
  interface StrapiPlugins {
    sample: SamplePlugin;
  }

  // // extends configuration for ./config/plugins.js
  interface StrapiConfigPluginSettings {
    sample?: SamplePluginConfig;
  }

  /**
   * Register SampleMiddleware into global scope.
   *
   * same as: interface StrapiMiddleware extends SamplePluginMiddlewares {}
   *
   * @example strapi.middleware.sample: ReturnType<typeof SampleMiddleware>
   */

  interface StrapiMiddleware {
    sample: SamplePluginMiddlewares['sample'];
  }
}
