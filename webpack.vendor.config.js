const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['./app/src/vendor.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vendor.js',
        library: "vendor_lib"
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "vendor-manifest.json"),
            name: "vendor_lib"
        }),
        new UglifyJSPlugin()
    ]
};
