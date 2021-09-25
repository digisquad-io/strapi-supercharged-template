import type { Model } from 'bookshelf';
import type { Entity } from './entities';
import type { StrapiAdmin } from './admin';

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
import type { StrapiQuery } from './query';
import type {
  StrapiDBManager,
  StrapiConnections,
  StrapiCoreStore,
} from './database';

import type {
  StrapiWebhookRunner,
  StrapiWebhookStore,
} from './webhooks';

import type {
  StrapiApp,
  StrapiLogger,
  StrapiContentTypes,
  StrapiEE,
  StrapiEntityValidator,
  StrapiEntityService,
  StrapiErrors,
  StrapiEventHub,
  StrapiFs,
  StrapiRouter,
  StrapiServer,
  StrapiUtils,
  StrapiTelemetry,
} from './core';

export interface Strapi<
  API extends StrapiBaseApi,
  COMPONENTS extends StrapiBaseComponents,
  CONFIG extends StrapiBaseConfig,
  CONTROLLERS extends StrapiBaseControllers,
  HOOK extends StrapiBaseHook,
  MIDDLEWARE extends StrapiBaseMiddleware,
  MODELS extends StrapiBaseModels,
  SERVICES extends StrapiBaseServices,
  PLUGINS extends StrapiBasePlugins
> {
  /**
   * This object contains APIs contained in the ./api folder.
   *
   * And by using strapi.api[:name] you can access the controllers, services,
   * the model definition and also the configurations of the ./api/:name folder
   */
  api: API;
  components: COMPONENTS;
  /**
   * Returns an object that represents the configurations of the project.
   *
   * Every JavaScript or JSON file located in the ./config folder will be parsed into the strapi.config object
   */
  config: CONFIG;
  /**
   * Returns an object of the controllers which is available in the project.
   *
   * Every JavaScript file located in the ./api/**\/controllers folder will
   * be parsed into the strapi.controllers object.
   * Thanks to this object, you can access every controller's actions everywhere in the project.
   *
   * Note: This object doesn't include the admin's controllers and plugin's controllers.
   */
  controllers: CONTROLLERS;
  /**
   * Returns an object of the hooks available in the project.
   *
   * Every folder that follows this pattern strapi-* and located in the ./node_modules
   * or /hooks folder will be mounted into the strapi.hook object.
   */
  hook: HOOK;
  /**
   * Returns an object of the middlewares available in the project.
   *
   * Every folder in the ./middlewares folder will be also mounted into the strapi.middleware object.
   */
  middleware: MIDDLEWARE;
  /**
   * Returns an object of models available in the project.
   *
   * Every JavaScript or JSON file located in the ./api/**\/models folders will
   * be parsed into the strapi.models object. Also every strapi.models.** object is
   * merged with the model's instance returned by the ORM (Mongoose, Bookshelf).
   *
   * It allows to call the ORM methods through the strapi.models.** object (ex: strapi.models.users.find())
   */
  models: MODELS;
  /**
   * Returns an object of services available in the project.
   *
   * Every JavaScript file located in the ./api/**\/services folders
   * will be parsed into the strapi.services object.
   */
  services: SERVICES;
  /**
   * Returns an object of plugins available within the project.
   *
   * Each plugin object contains the associated controllers, models, services and configurations
   */
  plugins: PLUGINS;

  /**
   * Returns the Koa instance
   */
  app: StrapiApp;
  /**
   * Returns the Logger (Pino) instance
   */
  log: StrapiLogger;
  /**
   * This utility function allows to bind models with query functions
   * specific to each ORM (e.g: mongoose or bookshelf).
   *
   * @see https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#queries
   */
  query: <T extends Entity>(
    model: string,
    plugin?: string
  ) => StrapiQuery<T>;
  getModel: (modelKey: string, plugin?: string) => Model<any>;

  /**
   * This object contains the controllers, models, services and configurations contained in the strapi-admin package
   */
  admin: StrapiAdmin;
  connections: StrapiConnections;
  contentTypes: StrapiContentTypes;
  db: StrapiDBManager<
    Strapi<
      API,
      COMPONENTS,
      CONFIG,
      CONTROLLERS,
      HOOK,
      MIDDLEWARE,
      MODELS,
      SERVICES,
      PLUGINS
    >
  >;
  dir: Readonly<string>;
  entityValidator: StrapiEntityValidator;
  entityService: StrapiEntityService;
  eventHub: StrapiEventHub;
  fs: StrapiFs;
  isLoaded: Readonly<boolean>;
  /**
   * Returns the Router (Joi router) instance
   */
  router: StrapiRouter;
  /**
   * Returns the http.Server (opens new window)instance.
   */
  server: StrapiServer;
  telemetry: StrapiTelemetry;
  utils: StrapiUtils;
  webhookStore: StrapiWebhookStore; // StrapiQuery<StrapiWebhookEntity>;
  webhookRunner: StrapiWebhookRunner;

  // internal methods
  get EE(): false | StrapiEE;
  destroy: () => Promise<void>;
  errors: StrapiErrors;
  initServer: () => void;
  /**
   * Returns a function that parses the configurations, hooks, middlewares and APIs of your app.
   *
   * It also loads the middlewares and hooks with the previously loaded configurations.
   * This method could be useful to update references available through the strapi global variable
   * without having to restart the server.
   *
   * However, without restarting the server, the new configurations will not be taken in account.
   */
  load: () => Promise<
    Strapi<
      API,
      COMPONENTS,
      CONFIG,
      CONTROLLERS,
      HOOK,
      MIDDLEWARE,
      MODELS,
      SERVICES,
      PLUGINS
    >
  >;
  logFirstStartupMessage: () => void;
  listen: (callback?: Function) => void;
  logStats: () => void;
  /**
   * Returns a function that reloads the entire app (with downtime)
   */
  reload: () => void;
  logStartupMessage: () => void;
  requireProjectBootstrap: () => void;
  /**
   * Returns a function that loads the configurations, middlewares and hooks.
   * Then, it executes the bootstrap file, freezes the global variable and listens the configured port.
   */
  start: (callback: Function) => void;
  startWebhooks: (callback: Function) => void;

  /**
   * Returns a function that shuts down the server and destroys the current connections
   */
  stop: (exitCode: number) => never;
  stopWithError: (error: Error, message?: string) => never;
  store: (source: any) => StrapiCoreStore;
}
