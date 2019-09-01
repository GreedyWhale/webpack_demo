const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map'
}
module.exports = merge(common, prodConfig)