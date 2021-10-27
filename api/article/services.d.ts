import articleService from './services/article';
import type { Article } from './models/article';
import type { StrapiBaseCollectionService } from 'strapi-supercharged';

export interface ArticleServices {
  article: typeof articleService &
    StrapiBaseCollectionService<Article>;
}

declare global {
  /**
   * Register ArticleServices into StrapiServices global scope.
   *
   * @example strapi.services.article: ArticleServices
   */
  interface StrapiServices extends ArticleServices {}
}
