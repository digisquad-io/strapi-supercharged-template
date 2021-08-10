import type { Model } from 'bookshelf';

export default interface StrapiQuery<T> {
  model: Model<any>;
  find: (filters: any, populate?: string[]) => Promise<T[]>;
  search: (filters: any) => Promise<T[]>;
  findOne: (
    filters: any,
    populate?: string[]
  ) => Promise<T | undefined>;
  create: (data: any, options?: any) => Promise<T>;
  count: (filters: any) => Promise<number>;
  countSearch: (filters: any) => Promise<number>;
  update: (filters: any, data: any, options?: any) => Promise<T>;
  delete: (filters: any) => Promise<T>;
}
