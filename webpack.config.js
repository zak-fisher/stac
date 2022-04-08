const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const path = require('path');
const pkg = require('./package.json');

const core = require('@fubo/core').default;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: core.config.servers.stac,
    historyApiFallback: true
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin()
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-typescript',
            // 'awesome-typescript-loader'
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: pkg.name.split('/').pop(),
      filename: 'remoteEntry.js',
      exposes: {
        './STACCounter': './src/packages/components/STACCounter/src',
      },
      remotes: {},
      shared: core.config.sharedDeps,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
