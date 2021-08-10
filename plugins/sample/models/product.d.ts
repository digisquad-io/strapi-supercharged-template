import type {
  Entity,
  DateTimeField,
  TimestampFields,
  RelationWith,
} from '/@internal/entities';

type SampleProduct = Entity &
  TimestampFields & {
    name: string;
    description: string;
    provider: 'aliexpress' | 'amazon';
    publishAt: DateTimeField;
    user: RelationWith<Entity>;
  };

export default SampleProduct;
