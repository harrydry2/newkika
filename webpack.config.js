const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// minify build
const CompressionPlugin = require("compression-webpack-plugin");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  entry: {
    bundle: ["./public/src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
     models: path.join(__dirname, './public/fonts')
    }
  },
  module: {
    rules: [
      {
        test: /\.sass|\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /plugin\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
         test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: 'base64-font-loader',
         include: [
          path.resolve(__dirname, './public'),
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    // minify
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
    // new UglifyJSPlugin()
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js/,
    //   threshold: 10240,
    //   minRatio: 0,
    //   deleteOriginalAssets: true,
    // })
  ]
};
