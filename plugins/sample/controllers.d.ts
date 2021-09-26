import sampleController from './controllers/sample';

export interface SamplePluginControllers {
  sample: typeof sampleController;
}
