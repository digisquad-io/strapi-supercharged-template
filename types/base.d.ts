export interface StrapiBaseMiddleware extends Record<string, any> {
  initialize(): void | Promise<void>;
}
export interface StrapiBaseAPI {
  config: Record<string, any>;
  models: Record<string, any>;
  controllers: Record<string, any>;
  services: Record<string, any>;
}

export interface StrapiBasePlugin {
  config: Record<string, any>;
  controllers: Record<string, any>;
  services: Record<string, any>;
  models: Record<string, any>;
}

// export interface StrapiBaseApi extends Record<string, any> {}
// export interface StrapiBaseComponents extends Record<string, any> {}
// export interface StrapiBaseConfig extends Record<string, any> {}
// export interface StrapiBaseControllers extends Record<string, any> {}
// export interface StrapiBaseHook extends Record<string, any> {}
// export interface StrapiBaseMiddleware extends Record<string, any> {}
// export interface StrapiBaseModels extends Record<string, any> {}
// export interface StrapiBaseServices extends Record<string, any> {}
// export interface StrapiBasePlugins extends Record<string, any> {}
