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
      ],
    }),
  ],
  mode: 'production',
};
