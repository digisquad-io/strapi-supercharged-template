import type {
  Entity,
  TimestampFields,
  RelationWith,
} from '/@internal/entities';

import type { models as SamplePluginModels } from '/@plugins/sample';

export type Article = Entity &
  TimestampFields & {
    name: string;
    content: string;
    products: RelationWith<SamplePluginModels.Product>[];
  };

export default Article;
