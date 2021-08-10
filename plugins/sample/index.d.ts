import type { SampleControllers } from './controllers';
import type { SampleMiddlewares } from './middlewares';
import type { SampleServices } from './services';
export * as models from './models';

export default interface SamplePlugin {
  controllers: SampleControllers;
  middlewares: SampleMiddlewares;
  services: SampleServices;
}

declare global {
  /* eslint-disable-next-line no-unused-vars */
  interface StrapiPlugins {
    sample: SamplePlugin;
  }
}
