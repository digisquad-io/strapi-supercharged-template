import sampleMiddleware from './middlewares/sample';

export interface SamplePluginMiddlewares {
  sample: ReturnType<typeof sampleMiddleware>;
}
