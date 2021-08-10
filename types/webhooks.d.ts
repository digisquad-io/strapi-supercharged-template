// Strapi webhooks
import type { Entity } from './entities';
import type { StrapiEventHub, StrapiLogger } from './core';

export type StrapiWebhookEntity = Entity & {
  url: string;
  isEnabled: boolean;
  events: string[];
  headers?: Record<string, any>;
};
export interface StrapiWebhookStore extends Record<string, any> {}
export interface StrapiWebhookResult {
  statusCode: number;
  message?: string;
}
export interface StrapiWebhookRunner {
  // eslint-disable-next-line @typescript-eslint/no-misused-new
  new <T>(options: {
    eventHub: StrapiEventHub;
    logger: StrapiLogger;
    configuration: T;
  }): StrapiWebhookRunner;

  deleteListener(event: string): void;
  createListener(event: string): void;
  executeListener(listener: {
    event: string;
    info?: any;
  }): Promise<StrapiWebhookResult>;
  run(
    webhook: StrapiWebhookEntity,
    event: string,
    info?: any
  ): Promise<StrapiWebhookResult>;

  add(webhook: StrapiWebhookEntity): void;
  update(webhook: StrapiWebhookEntity): void;
  delete(webhook: StrapiWebhookEntity): void;
}
