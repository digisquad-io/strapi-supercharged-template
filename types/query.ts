import type { Model } from 'bookshelf';
import type { Entity } from './entities';

export interface StrapiQueryFilters extends Record<string, any> {}
export interface StrapiQueryOptions extends Record<string, any> {}

export interface StrapiQuery<T extends Entity> {
  model: Model<any>;
  find: (
    filters: StrapiQueryFilters,
    populate?: string[]
  ) => Promise<T[]>;
  search: (filters: StrapiQueryFilters) => Promise<T[]>;
  findOne: (
    filters: StrapiQueryFilters,
    populate?: string[]
  ) => Promise<T | undefined>;
  create: (
    data: Partial<Omit<T, 'id'>>,
    options?: StrapiQueryOptions
  ) => Promise<T>;
  count: (filters: StrapiQueryFilters) => Promise<number>;
  countSearch: (filters: StrapiQueryFilters) => Promise<number>;
  update: (
    filters: StrapiQueryFilters,
    data: Partial<Omit<T, 'id'>>,
    options?: StrapiQueryOptions
  ) => Promise<T>;
  delete: (filters: StrapiQueryFilters) => Promise<T>;
}
