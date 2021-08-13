import { StrapiAppContext } from './core';
import { CollectionEntity, SingleTypeEntity } from './entities';
import { StrapiQueryFilters, StrapiQueryPopulate } from './query';

export interface StrapiBaseCollectionController<
  T extends CollectionEntity
> {
  find(ctx: StrapiAppContext): Promise<T[]>;
  findOne(ctx: StrapiAppContext): Promise<T>;
  count(ctx: StrapiAppContext): Promise<number>;
  create(ctx: StrapiAppContext): Promise<T>;
  update(ctx: StrapiAppContext): Promise<T>;
  delete(ctx: StrapiAppContext): Promise<T>;
}

export interface StrapiBaseSingleTypeController<
  T extends SingleTypeEntity
> {
  find(ctx: StrapiAppContext): Promise<T>;
  update(ctx: StrapiAppContext): Promise<T>;
  delete(ctx: StrapiAppContext): Promise<T>;
}

export interface StrapiBaseCollectionService<
  T extends CollectionEntity
> {
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

export interface StrapiBaseSingleTypeService<
  T extends SingleTypeEntity
> {
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
