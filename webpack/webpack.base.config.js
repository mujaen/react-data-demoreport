/***
 *  BASE WEBPACK CONFIGURATION
 */
const webpack = require('webpack')
const path = require('path')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  devServer: {
    port: 5000,
    static: path.resolve(__dirname, 'app'),
    historyApiFallback: true,
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
            tsconfigRaw: require('../tsconfig.json'),
          },
        },
      },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DIST_ENV: JSON.stringify(process.env.DIST_ENV),
    }),
  ]),
})
