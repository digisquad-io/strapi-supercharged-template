import article from './services/article';
import type { Article } from './models/article';
import type { StrapiBaseCollectionService } from '/@internal/api';

export interface ArticleServices {
  article: typeof article & StrapiBaseCollectionService<Article>;
}

declare global {
  /**
   * Register ArticleControllers into StrapiControllers global scope.
   *
   * @example strapi.controllers.article: ArticleControllers
   */
  interface StrapiServices extends ArticleServices {}
}
