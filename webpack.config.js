const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'app')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /test/],
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                      loader: 'css-loader'
                    }, {
                      loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            }
        ]
    },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV !== "production"
    }),
    new HtmlWebpackPlugin({
      title: 'MERN-Starter',
      template: './src/index.ejs'
    })
  ]
};