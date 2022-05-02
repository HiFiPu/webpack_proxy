const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
const webpack = require("webpack")
const WebpackBar = require('webpackbar')
// import chalk from 'chalk';
// var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NODE_ENV=process.env.NODE_ENV;
console.log(NODE_ENV);
module.exports = {
  mode: "development",
  // entry: './src/index.js',
  entry: {
    // print: './src/print.js',
    // index: './src/index.js',
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    proxy: {
      "/hbb": {
        target: "https://api.hongbeibang.com",
        pathRewrite: {
          "^/hbb": "",
        },
        secure: false,
      },
    },
    historyApiFallback: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     title: '管理输出'
    // })
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: true,
    }),
    new webpack.ProgressPlugin(),
    new WebpackBar()
    // new ProgressBarPlugin()
    // new ProgressBarPlugin({
    //   format: '  build [:bar] ' + ' (:elapsed seconds)',
    //   clear: false
    // })
  ],
  output: {
    // filename: 'bundle.js',
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  // optimization: {
  //     runtimeChunk: 'single',
  // },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [{
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // test: /\.jsx?$/,
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
};