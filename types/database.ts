// Strapi db
export interface StrapiConnections extends Record<string, any> {}
export interface StrapiDBManager<T> {
  // eslint-disable-next-line @typescript-eslint/no-misused-new
  new <T>(strapi: T): StrapiDBManager<T>;
  initialized: boolean;
  initialize(): Promise<StrapiDBManager<T>>;
  destroy(): Promise<void>;
  initializeModelsMap(): void;
  query(entity: string, plugin: string): any;
  getModelFromStrapi(name: string, plugin: string): any;
  getModel(name: string, plugin: string): any;
  getModelByAssoc(assoc: any): any;
  getModelByCollectionName(name: string): any;
  getModelByGlobalId(globalId: string): any;
  getModelsByAttribute(attr: any): any;
  getModelsByPluginName(pluginName: string): any;
  getReservedNames(): any;
}

// Strapi Core Store

/* type StrapiCoreStoreEntity = Entity & {
    key: string;
    value: string;
    type: string;
    environment: string;
    tag: string;
  }; */

export interface StrapiCoreStore {
  get<T>(params: any): Promise<T | null>;
  set(params: any): Promise<void>;
  delete(souparamsrce: any): Promise<void>;
}
