---------------0001-----------------------------------------
首先，你需要安装 sass-loader：

npm install sass-loader sass webpack --save-dev
sass-loader 需要预先安装 Dart Sass 或 Node Sass（可以在这两个链接中找到更多的资料）。这可以控制所有依赖的版本， 并自由的选择使用的 Sass 实现。

这样可以控制所有依赖项的版本，并选择要使用的 Sass 实现。

ℹ️ 我们推荐使用 Dart Sass。

⚠ Node Sass 不能与 Yarn PnP 特性一起正常工作，并且不支持 @use rule。

将 sass-loader 、css-loader 与 style-loader 进行链式调用，可以将样式以 style 标签的形式插入 DOM 中，或者使用 mini-css-extract-plugin 将样式输出到独立的文件中。

然后将本 loader 添加到你的 Webpack 配置中。例如：

app.js

import './style.scss';
style.scss

$body-color: red;

body {
  color: $body-color;
}
webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
    ],
  },
};
最后通过你喜欢的方式运行 webpack。
--------------------0002----------------------------------------


