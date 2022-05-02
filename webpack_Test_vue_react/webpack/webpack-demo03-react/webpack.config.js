const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
const webpack = require("webpack");
const WebpackBar = require("webpackbar");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// import chalk from 'chalk';
// var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HappyPack = require("happypack");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
module.exports = {
  mode: "development",
  // entry: './src/index.js',
  entry: {
    // print: './src/print.js',
    index: "./src/index.js",
    // index: {
    //   import: "./src/index.js",
    //   dependOn: "shared",
    // },
    // another: {
    //   import: "./src/another-module.js",
    //   dependOn: "shared",
    // },
    // shared: "lodash",
  },
  // devtool: "inline-source-map",
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
    port: 8888,
    host: "0.0.0.0",
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     title: '管理输出'
    // })
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: true,
      minify: {
        removeAttributeQuotes: true, //删除双引号,
        collapseWhitespace: true, //压缩成一行，
      },
      hash: true,
    }),
    new webpack.ProgressPlugin(),
    new WebpackBar(),
    // new ProgressBarPlugin()
    // new ProgressBarPlugin({
    //   format: '  build [:bar] ' + ' (:elapsed seconds)',
    //   clear: false
    // })
    new MiniCssExtractPlugin({
      // 类似于 webpackOptions.output 中的选项
      // 所有选项都是可选的
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.DllReferencePlugin({
      // context: __dirname,
      // manifest: require("./dist/vendor-manifest.json"), //此即打包出来的json文件
      context: __dirname,
      manifest: require("./dll/vendor-manifest.json"),
      scope: "xyz",
      sourceType: "commonjs2",
    }),
    // happyPack 开启多进程打包
    //  new HappyPack({
    //   // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
    //   id: 'babel',
    //   // 如何处理 .js 文件，用法和 Loader 配置中一样
    //   loaders: ['babel-loader?cacheDirectory']
    // }),
    // 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
    new ParallelUglifyPlugin({
      // 传递给 UglifyJS 的参数
      // （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）
      uglifyJS: {
        output: {
          beautify: false, // 最紧凑的输出
          comments: false, // 删除所有的注释
        },
        compress: {
          // 删除所有的 `console` 语句，可以兼容 IE 浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true,
          //warnings: false,
          drop_debugger: true, //去掉debugger
          // drop_console: true, // 去掉console
          pure_funcs: ["console.log"], // 移除console
        },
      },
    }),
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
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  resolve: {
    // modules: [path.resolve('node_modules')],//只在当前目录下查找
    alias: {
      "@": path.resolve(__dirname, "src/pages/"),
      Templates: path.resolve(__dirname, "src/components/"),
    },
    // mainFields: ['style', 'main'],//优先寻找style，
    // mainFiles: [],//入口文件的名字,默认index.js
    // extensions: ['js', 'css', 'json', 'vue','js','tx','jsx','tsx','less','scss']//扩展名顺序
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // {
      //   test: /.s?css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      // },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },

      {
        // test: /\.jsx?$/,
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // loader: "babel-loader",
          loader: "babel-loader?cacheDirectory=true",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // {
      //   test: /\.jsx?$/,
      //   // 用 happypack/loader 替换原来的 babel-loader
      //   // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
      //   // id=babel 对应下面 plugins 中 new HappyPack 中的 id
      //   use: ['happypack/loader?id=babel'],
      //   include: srcPath,
      // },
    ],
  },
  performance: {
    hints: 'warning',
    // 入口起点的最大体积
    maxEntrypointSize: 50000000,
    // 生成文件的最大体积
    maxAssetSize: 30000000,
    // 只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js')
    }
  },
};
