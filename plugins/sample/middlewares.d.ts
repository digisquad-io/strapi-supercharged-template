import sample from './middlewares/sample';

export interface SamplePluginMiddlewares {
  sample: typeof sample;
}
