const express = require('express')
const { createProxyMiddleware  } = require('http-proxy-middleware')
let app = express()

// 对/api开头请求进行转发处理
app.use('/apx', createProxyMiddleware({ 
	// 转发到5000端口
	target: 'https://www.yuque.com',
	// 转发时重写路径
	pathRewrite: {'^/apx' : ''},
	changeOrigin: true }));

// 将前端项目所在文件夹设置为静态资源
app.use('/', createProxyMiddleware({ 
	// 转发到5000端口
	target: 'http://localhost:8000',
	// 转发时重写路径
	pathRewrite: {'^/' : ''},
	changeOrigin: true }));

app.listen(3000)
