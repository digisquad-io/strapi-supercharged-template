import sample from './middlewares/sample';

export default interface SamplePluginMiddlewares {
  sample: typeof sample;
}
