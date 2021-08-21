import type { Model } from 'bookshelf';
import type { Entity } from './entities';

export type StrapiQueryPopulate = string[];
export interface StrapiQueryFilters extends Record<string, any> {}

// interface StrapiModelQueryFilters
//   extends Record<string, any> {}

// type FilterSuffix = 'eq' | 'ne';
// type RangeSuffix = 'lt' | 'lte' | 'gt' | 'gte';
// type ArrayFilterSuffix =
//   | 'in'
//   | 'nin'
//   | 'contains'
//   | 'ncontains'
//   | 'containss'
//   | 'ncontainss';
// type BooleanSuffix = 'null';

// export type StrapiWhereFieldFilters<
//   T extends string | number | bigint | boolean | null | undefined
// > = {
//   [key in `${T}`]?: string | number | boolean;
// } &
//   {
//     [key in `${T}_${FilterSuffix}`]?: string | number | boolean;
//   } &
//   {
//     [key in `${T}_${RangeSuffix}`]?: string | number;
//   } &
//   {
//     [key in `${T}_${ArrayFilterSuffix}`]?:
//       | string[]
//       | number[]
//       | boolean[];
//   } &
//   {
//     [key in `${T}_${BooleanSuffix}`]?: boolean;
//   };

// type StrapiQueryFilters<UID extends string> =
//   StrapiModelQueryFilters[UID] & {
//     _sort?: string;
//     _start?: number;
//     _publicationState?: 'live' | 'preview';
//     _locale?: string;
//     _limit?: number;
//     _where?: StrapiModelQueryFilters[UID];
//   };

export interface StrapiQueryOptions extends Record<string, any> {}

export interface StrapiQuery<T extends Entity> {
  model: Model<any>;
  find: (
    filters?: StrapiQueryFilters,
    populate?: StrapiQueryPopulate
  ) => Promise<T[]>;
  search: (filters?: StrapiQueryFilters) => Promise<T[]>;
  findOne: (
    filters?: StrapiQueryFilters,
    populate?: StrapiQueryPopulate
  ) => Promise<T | undefined>;
  create: (
    data: Partial<Omit<T, 'id'>>,
    options?: StrapiQueryOptions
  ) => Promise<T>;
  count: (filters?: StrapiQueryFilters) => Promise<number>;
  countSearch: (filters?: StrapiQueryFilters) => Promise<number>;
  update: (
    filters: StrapiQueryFilters,
    data: Partial<Omit<T, 'id'>>,
    options?: StrapiQueryOptions
  ) => Promise<T>;
  delete: (filters: StrapiQueryFilters) => Promise<T>;
}
