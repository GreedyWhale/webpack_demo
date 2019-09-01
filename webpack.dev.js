const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://baike.baidu.com',
        changeOrigin: true,
        secure: false,
      }
    },
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
module.exports = merge(common, devConfig)