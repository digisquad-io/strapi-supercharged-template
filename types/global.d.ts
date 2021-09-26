import type { Strapi } from './strapi';
// import type {
//   StrapiBaseApi,
//   StrapiBaseComponents,
//   StrapiBaseConfig,
//   StrapiBaseControllers,
//   StrapiBaseHook,
//   StrapiBaseMiddleware,
//   StrapiBaseModels,
//   StrapiBasePlugins,
//   StrapiBaseServices,
// } from './base';
import {
  StrapiConfigAPI,
  StrapiConfigBaseHookSettings,
  StrapiConfigBaseMiddlewareSettings,
  StrapiConfigDatabase,
  StrapiConfigHooks,
  StrapiConfigMiddlewares,
  StrapiConfigServer,
} from './config';

declare global {
  // Custom API: extends them in your app or plugins

  /**
   * Extends the Strapi API `strapi.api` object with interface augmentation.
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.api.myApi
   * interface StrapiApi {
   *   myApi: Record<string, any>;
   * }
   * ```
   */
  interface StrapiApi extends Record<string, any> {}

  /**
   * Extends the Strapi Components `strapi.components` object with interface augmentation.
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.components['meta.metadata']
   * interface StrapiComponents {
   *   'meta.metadata': any;
   * }
   * ```
   */
  interface StrapiComponents extends Record<string, any> {}

  /**
   * Extends the Strapi Controllers `strapi.controller` object with interface augmentation.
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.controller.myController
   * interface StrapiControllers {
   *   myController: (ctx: any) => any;
   * }
   * ```
   */
  interface StrapiControllers extends Record<string, any> {}

  /**
   * Extends the Strapi Hooks `strapi.hook` object with interface augmentation.
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.hook.myHook
   * interface StrapiHook {
   *   myHook: any;
   * }
   * ```
   */
  interface StrapiHook extends Record<string, any> {}

  /**
   * Extends the Strapi Middleware `strapi.middleware` object with interface augmentation.
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.myMiddleware.myMiddleware
   * interface StrapiMiddleware {
   *   myMiddleware: any;
   * }
   * ```
   */
  interface StrapiMiddleware extends Record<string, any> {}

  /**
   * Extends the Strapi Models `strapi.models` object with interface augmentation.
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.models.myModel
   * interface StrapiModels {
   *   myModel: any;
   * }
   * ```
   */
  interface StrapiModels extends Record<string, any> {}

  /**
   * Extends the Strapi Services `strapi.services` object with interface augmentation.
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.services.myService
   * interface StrapiServices {
   *   myService: any;
   * }
   * ```
   */
  interface StrapiServices extends Record<string, any> {}

  /**
   * Extends the Strapi Plugins `strapi.plugins` object with interface augmentation.
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.plugins.myPlugin
   * interface StrapiPlugins {
   *   myPlugin: any;
   * }
   * ```
   */
  interface StrapiPlugins extends Record<string, any> {}

  /**
   * Extends the Strapi Hook configuration `strapi.config.hook.settings` object with interface augmentation.
   * This will have also effect in `./config/hooks.js` file
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.config.hook.settings.myHook
   * interface StrapiConfigHookSettings {
   *   myHook: {
   *     enabled: boolean;
   *     requiredSetting: string;
   *     optionalSetting?: nuber;
   *   };
   * }
   * ```
   */
  interface StrapiConfigHookSettings
    extends StrapiConfigBaseHookSettings {}

  /**
   * Extends the Strapi Middlewares configuration `strapi.config.middleware.settings` object with interface augmentation.
   * This will have also effect in `./config/middlewares.js` file
   *
   * Simply redeclare the interface with the new methods you want to add.
   *
   * @example
   * ```ts
   * // register strapi.config.middlewares.settings.myMiddleware
   * interface StrapiConfigMiddlewareSettings {
   *   myMiddleware: {
   *     enabled: boolean;
   *     requiredSetting: string;
   *     optionalSetting?: nuber;
   *   };
   * }
   * ```
   */
  interface StrapiConfigMiddlewareSettings
    extends StrapiConfigBaseMiddlewareSettings {}

  interface StrapiConfig extends Record<string, any> {
    host: string;
    port: number;
    uuid: string;
    environment: string;
    appPath: string;
    lauchedAt: number;
    autoReload: boolean;
    serveAdminPanel: boolean;
    installedPlugins: string[];
    installedMiddlewares: string[];
    installedHooks: string[];
    installedProviders: string[];
    paths: Record<string, any>;
    packageSonStrapi: Record<string, any>;
    info: Record<string, any>;
    routes: Record<string, any>[];
    admin: Record<string, any>;
    functions: Record<string, any>;
    policies: Record<string, any>;
    database: StrapiConfigDatabase;
    api: StrapiConfigAPI;
    server: StrapiConfigServer;
    // plugins?: StrapiConfigPlugins;
    hook: StrapiConfigHooks;
    middlewares: StrapiConfigMiddlewares;
    get<T>(key: string, orElse?: T): T;
    has(key: string): boolean;
    set(key: string, value?: any): void;
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
