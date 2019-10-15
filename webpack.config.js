const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [ './client/App.jsx'],
  mode: 'development',
  watch: false,
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
  ],

};
