import type { Router } from 'koa-joi-router';
import type { Server } from 'http';
import type { EventEmitter } from 'events';
import type Koa from 'koa';
import type { BaseLogger } from 'pino';

export type StrapiErrors = () => Record<string, Function>;
export interface StrapiApp extends Koa {}
export interface StrapiLogger extends BaseLogger {}
export interface StrapiRouter extends Router {}
export interface StrapiServer extends Server {}
export interface StrapiEventHub extends EventEmitter {}
export interface StrapiUtils extends Record<string, Function> {}
export interface StrapiContentTypes extends Record<string, any> {}
export interface StrapiEntityValidator extends Record<string, any> {}
export interface StrapiEntityService extends Record<string, any> {}
export interface StrapiFs {
  writeAppFile: Function;
  writePluginFile: Function;
  removeAppFile: Function;
}
export interface StrapiEE {
  licenseInfo: Readonly<string>;
  isEE: Readonly<boolean>;
  features: Readonly<any[]>;
}
export type StrapiTelemetry =
  | undefined
  | {
      destroy(): void;
      send(event: string, payload: any): Promise<any>;
    };
