import article from './controllers/article';
import type Article from './models/article';
import type { StrapiBaseCollectionController } from '/@internal/api';

export default interface ArticleControllers {
  article: typeof article & StrapiBaseCollectionController<Article>;
}
