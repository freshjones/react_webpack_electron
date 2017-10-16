var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var DllLinkPlugin = require('dll-link-webpack-plugin');

/*
new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('./dist/vendor-manifest.json'),
}),
*/

module.exports = {
  cache:true,
  entry: {
    app : './app/src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: [".jsx", ".js"]
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
    new ExtractTextPlugin("styles.css"),
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }
};
