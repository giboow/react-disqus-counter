/* eslint-disable no-var */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './main.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
     template: path.join(__dirname, 'index.html'),
     hash: false,
     filename: 'index.html',
     inject: 'body'
    })
  ],
  resolve : {
    alias : {
      'react-disqus-counter': path.join(__dirname, '../../lib/'),
    },
    extension : ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          __dirname
        ],
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
};
