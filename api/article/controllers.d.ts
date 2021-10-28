import articleController from './controllers/article';
import type { Article } from './models/article';
import type { StrapiBaseCollectionController } from 'strapi-supercharged';

export interface ArticleControllers {
  article: typeof articleController &
    StrapiBaseCollectionController<Article>;
}

declare module 'strapi-supercharged' {
  /**
   * Register ArticleControllers into StrapiControllers global scope.
   *
   * @example strapi.controllers.article: ArticleControllers
   */
  export interface StrapiControllers extends ArticleControllers {}
}
