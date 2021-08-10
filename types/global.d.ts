import type Koa from 'koa';
import type { Model } from 'bookshelf';
import type { BaseLogger } from 'pino';
import type { Router } from 'koa-joi-router';
import type { Server } from 'http';
import type StrapiAdmin from './admin';
import type StrapiQuery from './query';

declare global {
  interface StrapiApp extends Koa {}

  // Utils
  interface StrapiConfig extends Record<string, any> {}
  interface StrapiLogger extends BaseLogger {}

  // Custom API
  interface StrapiApi extends Record<string, any> {}
  interface StrapiControllers extends Record<string, any> {}
  interface StrapiHook extends Record<string, any> {}
  interface StrapiMiddlewares extends Record<string, any> {}
  interface StrapiServices extends Record<string, any> {}

  // Plugins
  interface StrapiPlugins extends Record<string, any> {}

  // Internal API
  type StrapiErrors = () => Record<string, Function>;
  interface StrapiRouter extends Router {}
  interface StrapiServer extends Server {}
  interface StrapiConnections extends Record<string, any> {}
  interface StrapiContentTypes extends Record<string, any> {}
  interface StrapiWebhookStore extends Record<string, any> {}
  interface StrapiEntityValidator extends Record<string, any> {}
  interface StrapiEntityService extends Record<string, any> {}
  interface StrapiUtils extends Record<string, Function> {}
  interface StrapiFs {
    writeAppFile: Function;
    writePluginFile: Function;
    removeAppFile: Function;
  }
  interface StrapiEE {
    licenseInfo: Readonly<string>;
    isEE: Readonly<boolean>;
    features: Readonly<any[]>;
  }

  // Strapi instance
  interface Strapi {
    // public properties
    log: StrapiLogger;
    api: StrapiApi;
    controllers: StrapiControllers;
    hook: StrapiHook;
    config: StrapiConfig;
    middleware: StrapiMiddlewares;
    plugins: StrapiPlugins;
    services: StrapiServices;

    // internal properties
    dir: string;
    isLoaded: boolean;
    utils: StrapiUtils;
    router: StrapiRouter;
    server: StrapiServer;
    app: StrapiApp;
    admin: StrapiAdmin;
    fs: StrapiFs;
    connections: StrapiConnections;
    contentTypes: StrapiContentTypes;
    webhookStore: StrapiWebhookStore;
    entityValidator: StrapiEntityValidator;
    entityService: StrapiEntityService;

    // public methods
    query: <T>(model: string, plugin?: string) => StrapiQuery<T>;
    getModel: (modelKey: string, plugin?: string) => Model<any>;

    // internal methods
    errors: StrapiErrors;
    load: () => Promise<Strapi>;
    destroy: () => Promise<void>;
    reload: () => void;
    initServer: () => void;
    logStartupMessage: () => void;
    logFirstStartupMessage: () => void;
    requireProjectBootstrap: () => void;
    logStats: () => void;
    start: (callback: Function) => void;
    listen: (callback?: Function) => void;
    startWebhooks: (callback: Function) => void;
    stop: (exitCode: number) => void;
    stopWithError: (error: Error, message?: string) => void;
    get EE(): false | StrapiEE;
  }

  // eslint-disable-next-line no-unused-vars
  const strapi: Strapi;
}
