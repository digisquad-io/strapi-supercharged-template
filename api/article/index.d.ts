import type ArticleControllers from './controllers';
import type ArticleServices from './services';
export * as models from './models';

import { StrapiAPIDefinition } from '/@internal/base';

export default interface ArticleAPI extends StrapiAPIDefinition {
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

  /**
   * Register ArticleControllers into StrapiControllers global scope.
   *
   * @example strapi.controllers.article: ArticleControllers
   */
  interface StrapiControllers extends ArticleControllers {}

  /**
   * Register ArticleServices into StrapiServices global scope.
   *
   * @example strapi.services.article: ArticleServices
   */
  interface StrapiServices extends ArticleServices {}
}
