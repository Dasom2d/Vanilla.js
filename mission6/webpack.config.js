const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(png|svg|jpe?g|gif)$/,
              loader:'file-loader',
              options: {
                name: '[hash].[ext]'
              }
            },
            {
              test: /\.scss$/,
              use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
              ],
              exclude: /node_modules/
            }
          ]
    },
    devtool: 'inline-source-map',
};