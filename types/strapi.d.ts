import type { Model } from 'bookshelf';
import type { Entity } from './entities';
import type StrapiAdmin from './admin';

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
  // general api properties
  api: API;
  components: COMPONENTS;
  config: CONFIG;
  controllers: CONTROLLERS;
  hook: HOOK;
  middleware: MIDDLEWARE;
  models: MODELS;
  services: SERVICES;
  plugins: PLUGINS;

  // developers utilities
  app: StrapiApp;
  log: StrapiLogger;
  query: <T extends Entity>(
    model: string,
    plugin?: string
  ) => StrapiQuery<T>;
  getModel: (modelKey: string, plugin?: string) => Model<any>;

  // internal properties
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
  router: StrapiRouter;
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
  reload: () => void;
  logStartupMessage: () => void;
  requireProjectBootstrap: () => void;
  start: (callback: Function) => void;
  startWebhooks: (callback: Function) => void;
  stop: (exitCode: number) => never;
  stopWithError: (error: Error, message?: string) => never;
  store: (source: any) => StrapiCoreStore;
}
