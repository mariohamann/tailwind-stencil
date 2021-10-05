import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'tailwind-stencil',
  globalStyle: 'www/tailwind.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'tailwind.css' }
      ],
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'tailwind.css' }
      ],
    },
  ],
};
