const {merge} = require('webpack-merge');
const base = require('./webpack.base');

const path = require('path');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimizer: [
          //压缩CSS代码
            new OptimizeCss(),
          //压缩js代码
            new UglifyJsPlugin({
              //启用文件缓存
                cache: true,
             //使用多线程并行运行提高构建速度
                parallel: true,
             //使用 SourceMaps 将错误信息的位置映射到模块
                sourceMap: true
            })
        ]
    },
    plugins:[
     //使用插件定义全局变量DEV
        new webpack.DefinePlugin({
            DEV:JSON.stringify('production')
        })
    ]

});