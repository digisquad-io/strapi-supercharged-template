import article from './services/article';
import type Article from './models/article';
import type { StrapiBaseCollectionService } from '/@internal/api';

export default interface ArticleServices {
  article: typeof article & StrapiBaseCollectionService<Article>;
}
