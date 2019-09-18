const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve('src', 'index.js')
  },
  output: {
    filename: '[name]_[contenthash].js',
    chunkFilename: '[name]_[contenthash].js',
    path: path.resolve('dist')
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
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      // minSize: 1000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          // name (module) {
          //   const moduleFileName = module.identifier().split('/').reduceRight(item => item)
          //   return moduleFileName.split('.')[0]
          // }
          filename: 'vendors.js'
        },
      }
    }
  }
}