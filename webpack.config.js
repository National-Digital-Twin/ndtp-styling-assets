// SPDX-License-Identifier: Apache-2.0
// © Crown Copyright 2026. This work has been developed by the National Digital Twin Programme and is legally attributed to the Department for Business and Trade (UK) as the governing entity.

import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/scss/main.scss',  // SCSS entry file
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',  // Not used directly for SCSS, but necessary for Webpack setup
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS from SCSS
          'css-loader',  // CSS Loader to handle imports of CSS
          'sass-loader',  // Compile SCSS into CSS
        ],
      },
    ],
  },
  plugins: [
    // Extract CSS into a separate file
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',  // Output the compiled CSS to this file
    }),

    // Copy SCSS files from src/scss/ into dist/scss/ maintaining folder structure (but not duplicating src/scss)
    new CopyPlugin({
      patterns: [
        {
          from: 'src/scss',  // Match all files in src/scss and subdirectories
          to: 'scss',  // Copy directly to dist/scss, no additional folder structure
        },
        {
          from: 'src/assets',  // Match all files in src/scss and subdirectories
          to: 'assets',  // Copy directly to dist/scss, no additional folder structure
        },
      ],
    }),
  ],
  mode: 'production',
};
