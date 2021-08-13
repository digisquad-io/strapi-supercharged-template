import article from './services/article';
import type { Article } from './models/article';
import type { StrapiBaseCollectionService } from '/@internal/api';

export interface ArticleServices {
  article: typeof article & StrapiBaseCollectionService<Article>;
}

declare global {
  /**
   * Register ArticleServices into StrapiServices global scope.
   *
   * @example strapi.services.article: ArticleServices
   */
  interface StrapiServices extends ArticleServices {}
}
