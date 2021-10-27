import type {
  ComponentField,
  TimestampFields,
  RelationWith,
  CollectionEntity,
} from 'strapi-supercharged';

import type { models as SamplePluginModels } from '/@plugins/sample';
import type { Metadata } from '/@components/meta/metadata';

export type Article = CollectionEntity &
  TimestampFields & {
    name: string;
    content: string;
    metadata?: ComponentField<Metadata>;
    products: RelationWith<SamplePluginModels.Product>[];
  };
