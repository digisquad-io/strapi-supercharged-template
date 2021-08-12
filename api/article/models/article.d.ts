import type {
  Entity,
  ComponentField,
  TimestampFields,
  RelationWith,
} from '/@internal/entities';

import type { models as SamplePluginModels } from '/@plugins/sample';
import type { Metadata } from '/@components/meta/metadata';

export type Article = Entity &
  TimestampFields & {
    name: string;
    content: string;
    metadata?: ComponentField<Metadata>;
    products: RelationWith<SamplePluginModels.Product>[];
  };

export default Article;
