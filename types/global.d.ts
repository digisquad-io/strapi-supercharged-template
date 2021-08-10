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

declare global {
  // Custom API: extends them in your app or plugins
  interface StrapiApi extends StrapiBaseApi {}
  interface StrapiComponents extends StrapiBaseComponents {}
  interface StrapiConfig extends StrapiBaseConfig {}
  interface StrapiControllers extends StrapiBaseControllers {}
  interface StrapiHook extends StrapiBaseHook {}
  interface StrapiMiddleware extends StrapiBaseMiddleware {}
  interface StrapiModels extends StrapiBaseModels {}
  interface StrapiServices extends StrapiBaseServices {}
  interface StrapiPlugins extends StrapiBasePlugins {}

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
