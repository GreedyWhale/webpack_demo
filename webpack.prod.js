const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const prodConfig = {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
  plugins: [new BundleAnalyzerPlugin()]
}
module.exports = merge(common, prodConfig)