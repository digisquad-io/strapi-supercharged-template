import article from './controllers/article';
import type { Article } from './models/article';
import type { StrapiBaseCollectionController } from '/@internal/api';

export interface ArticleControllers {
  article: typeof article & StrapiBaseCollectionController<Article>;
}

declare global {
  /**
   * Register ArticleControllers into StrapiControllers global scope.
   *
   * @example strapi.controllers.article: ArticleControllers
   */
  interface StrapiControllers extends ArticleControllers {}
}
