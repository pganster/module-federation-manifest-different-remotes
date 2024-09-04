import { defineConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': 'consumer.test:2000',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':  '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'federation_provider'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_provider',
          exposes: {
            './helloProducer': './src/helloProducer.ts',
          },
        }),
      ],
    },
  },
});
