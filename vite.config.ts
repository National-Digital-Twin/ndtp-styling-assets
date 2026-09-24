// SPDX-License-Identifier: Apache-2.0
// © Crown Copyright 2026. This work has been developed by the National Digital Twin Programme and is legally attributed to the UK's Department for Business, Innovation, Science and Trade (BIST) as the governing entity.

import path from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Vite configuration
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  
 
  
  // Build options
  build: {
    outDir: path.resolve(__dirname, 'dist'),  // Output directory for build
    rollupOptions: {
      input: path.resolve(__dirname, 'src/scss/main.scss'),  // SCSS entry file
      output: {
        assetFileNames: (assetInfo) => {
          // Check if the asset is a CSS file
          const name = assetInfo?.name;
          if (name && name.endsWith('.css')) {
            return 'css/[name].[hash].[ext]';  // Output CSS files into the 'css' folder
          }
          return 'assets/[name].[hash].[ext]';  // Default for other static assets
        },
      },
    },
    // CSS will be automatically extracted into a separate file
    cssCodeSplit: true,  // Enable CSS splitting
    assetsDir: 'assets', // Assets (images, fonts) will be placed in 'assets'
  },

  // Plugins
  plugins: [
    // Static copy of SCSS files into dist/scss maintaining folder structure
    viteStaticCopy({
      targets: [
        {
          src: 'scss',  // Match all files in src/scss
          dest: '',  // Copy them into dist/scss
        },
        {
          src: 'assets', // Match all files in src/assets
          dest: '', // Copy them into dist/assets
        },
      ],
    }),
  ],

  // Server configuration for development
  server: {
    // You can add custom server settings if necessary
  },
});
