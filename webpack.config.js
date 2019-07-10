const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve('src', 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist')
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://baike.baidu.com',
        changeOrigin: true,
        secure: false,
      }
    },
    hot: true,
    // hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: path.join('assets', 'images'),
            limit: 1024
          }
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64]'
              }
            }
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('template', 'index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}