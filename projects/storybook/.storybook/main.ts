import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  features: {
    actions: false,
    backgrounds: false,
    interactions: false,
    outline: false,
    measure: false,
    viewport: false,
    angularFilterNonInputControls: true,
  },
  "addons": [
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
           
        },
      },
    },
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader'
              }
            ],
          }
        ]
      }
    }
  ],
  
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;