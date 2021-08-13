import { StrapiAppContext } from './core';
import { Entity } from './entities';
import { StrapiQueryFilters, StrapiQueryPopulate } from './query';

export interface StrapiBaseCollectionController<T extends Entity> {
  find(ctx: StrapiAppContext): Promise<T[]>;
  findOne(ctx: StrapiAppContext): Promise<T>;
  count(ctx: StrapiAppContext): Promise<number>;
  create(ctx: StrapiAppContext): Promise<T>;
  update(ctx: StrapiAppContext): Promise<T>;
  delete(ctx: StrapiAppContext): Promise<T>;
}

export interface StrapiBaseSingleTypeController<T extends Entity> {
  find(ctx: StrapiAppContext): Promise<T>;
  update(ctx: StrapiAppContext): Promise<T>;
  delete(ctx: StrapiAppContext): Promise<T>;
}

export interface StrapiBaseCollectionService<T extends Entity> {
  find(
    params: StrapiQueryFilters,
    populate?: StrapiQueryPopulate
  ): Promise<T[]>;
  findOne(
    params: StrapiQueryFilters,
    populate?: StrapiQueryPopulate
  ): Promise<T>;
  count(params: StrapiQueryFilters): Promise<number>;
  create(
    data: Partial<Omit<T, 'id'>>,
    options?: { files: any }
  ): Promise<T>;
  update(
    params: StrapiQueryFilters,
    data: Partial<Omit<T, 'id'>>,
    options?: { files: any }
  ): Promise<T>;
  delete(params: StrapiQueryFilters): Promise<T>;
  search(params: StrapiQueryFilters): Promise<T[]>;
  countSearch(params: StrapiQueryFilters): Promise<number>;
}

export interface StrapiBaseSingleTypeService<T extends Entity> {
  find(
    params: StrapiQueryFilters,
    populate?: StrapiQueryPopulate
  ): Promise<T[]>;
  createOrUpdate(
    data: Partial<Omit<T, 'id'>>,
    options?: { files: any }
  ): Promise<T>;
  delete(params: StrapiQueryFilters): Promise<T>;
}
