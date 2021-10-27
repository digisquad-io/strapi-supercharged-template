import type {
  UserEntity,
  DateTimeField,
  TimestampFields,
  RelationWith,
  CollectionEntity,
} from 'strapi-supercharged';
import type { Article } from '/@api/article/models';

export type Product = CollectionEntity &
  TimestampFields & {
    name: string;
    description: string;
    provider: 'aliexpress' | 'amazon';
    publishAt: DateTimeField;
    user: RelationWith<UserEntity>;
    articles: RelationWith<Article>[];
  };
