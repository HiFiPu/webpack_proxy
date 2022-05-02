//引入webpack-merge插件进行合并
const {merge} = require('webpack-merge');
//引入webpack.base.conf.js文件
const base = require('./webpack.base.conf');
//引入webpack
const webpack = require('webpack');
//进行合并，将webpack.base.conf.js中的配置合并到这
module.exports = merge(base, {
   //模块参数
    mode: 'development',
    devServer: {
        contentBase: './dist',
      //端口号
        port: '8383',
        inline: true,
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot: true//允许热加载
    },
//启用source-map方便调试
    devtool: 'source-map',
    plugins: [
       //定义全局变量
        new webpack.DefinePlugin({
         //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
            DEV: JSON.stringify('dev')
        })
    ]
});