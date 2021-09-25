import type { Strapi } from './strapi';
import type {
  StrapiBaseApi,
  StrapiBaseComponents,
  StrapiBaseConfig,
  StrapiBaseControllers,
  StrapiBaseHook,
  StrapiBaseMiddleware,
  StrapiBaseModels,
  StrapiBasePlugins,
  StrapiBaseServices,
} from './base';
import {
  StrapiConfigAPI,
  StrapiConfigBaseHookSettings,
  StrapiConfigBaseMiddlewareSettings,
  StrapiConfigBasePlugins,
  StrapiConfigDatabase,
  StrapiConfigHooks,
  StrapiConfigMiddlewares,
  StrapiConfigServer,
} from './config';

declare global {
  // Custom API: extends them in your app or plugins
  interface StrapiApi extends StrapiBaseApi {}
  interface StrapiComponents extends StrapiBaseComponents {}
  interface StrapiControllers extends StrapiBaseControllers {}
  interface StrapiHook extends StrapiBaseHook {}
  interface StrapiMiddleware extends StrapiBaseMiddleware {}
  interface StrapiModels extends StrapiBaseModels {}
  interface StrapiServices extends StrapiBaseServices {}
  interface StrapiPlugins extends StrapiBasePlugins {}

  interface StrapiConfigHookSettings
    extends StrapiConfigBaseHookSettings {}
  interface StrapiConfigMiddlewareSettings
    extends StrapiConfigBaseMiddlewareSettings {}
  interface StrapiConfigPlugins extends StrapiConfigBasePlugins {}

  interface StrapiConfig extends StrapiBaseConfig {
    database?: StrapiConfigDatabase;
    api?: StrapiConfigAPI;
    server?: StrapiConfigServer;
    plugins?: StrapiConfigPlugins;
    hooks?: StrapiConfigHooks;
    middlewares?: StrapiConfigMiddlewares;
  }

  // eslint-disable-next-line no-unused-vars
  const strapi: Strapi<
    StrapiApi,
    StrapiComponents,
    StrapiConfig,
    StrapiControllers,
    StrapiHook,
    StrapiMiddleware,
    StrapiModels,
    StrapiServices,
    StrapiPlugins
  >;
}
