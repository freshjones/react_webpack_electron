var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DllLinkPlugin = require('dll-link-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  cache:true,
  entry: {
    app : [
      'react-hot-loader/patch',
      './app/src/index.jsx',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new DllLinkPlugin({
      config: require('./webpack.vendor.config.js'),
      htmlMode: true,
      assetsMode: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: 'css-loader', options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      }
    ]
  }
};
