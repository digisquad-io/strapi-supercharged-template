import type { ArticleControllers } from './controllers';
import type { ArticleServices } from './services';
export * as models from './models';

import { StrapiAPIDefinition } from '/@internal/base';

export interface ArticleAPI extends StrapiAPIDefinition {
  controllers: ArticleControllers;
  services: ArticleServices;
}

declare global {
  /**
   * Register ArticleAPI into StrapiApi global scope.
   *
   * @example strapi.api.article: ArticleAPI
   */
  interface StrapiApi {
    article: ArticleAPI;
  }
}
