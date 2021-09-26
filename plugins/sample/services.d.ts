import sampleService from './services/sample';

export interface SamplePluginServices {
  sample: typeof sampleService;
}
