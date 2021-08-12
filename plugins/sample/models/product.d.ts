import type {
  Entity,
  UserEntity,
  DateTimeField,
  TimestampFields,
  RelationWith,
} from '/@internal/entities';
import type Article from '/@api/article/models/article';

export type Product = Entity &
  TimestampFields & {
    name: string;
    description: string;
    provider: 'aliexpress' | 'amazon';
    publishAt: DateTimeField;
    user: RelationWith<UserEntity>;
    articles: RelationWith<Article>[];
  };

export default Product;
