/***
 *  DEVELOPMENT WEBPACK CONFIGURATION
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.base.config')({
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: [
    path.join(process.cwd(), 'src/app.tsx'),
  ],
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],
})
