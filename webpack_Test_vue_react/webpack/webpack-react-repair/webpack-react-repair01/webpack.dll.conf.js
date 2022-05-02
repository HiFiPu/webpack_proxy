// webpack.dll.conf.js
const path = require("path");
const webpack = require("webpack");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
module.exports = {
  entry: {
    vendor: ["react", "antd", "lodash", "jquery"], // 需要统一打包的类库
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].dll.js",
    library: "[name]_[hash]",
    // filename: "[name].dll.js",
    // library: "[name]_[fullhash]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_[hash]", //name必须要和output.library一致
      context: __dirname, //注意与DllReferencePlugin的context匹配一致
      path: path.join(__dirname, "dist", "[name]-manifest.json"),
    }),
    // new webpack.DllPlugin({
    //   context: __dirname,
    //   name: "[name]_[fullhash]",
    //   path: path.join(__dirname, "manifest.json"),
    // }),
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
        },
      },
    }),
  ],
};
