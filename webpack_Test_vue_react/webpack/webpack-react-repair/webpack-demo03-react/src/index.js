//这两个导入的时候，接收的成员名称（React/ReactDOM）必须这么写
import React from 'react' //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' //把创建好的组件和虚拟DOM放到页面上
import Test from './components/Test'
//创建虚拟DOM元素
//参数1：创建元素类型，字符串，表示元素的名称
//参数2：是一个对象或null，表示 当前这个DOM元素的属性
//参数3：子节点（包括其他虚拟DOM或文本子节点）
//参数n：其他子节点
//<h1>这是一个h1</h1>
// const myh1 = React.createElement('h1', null, '这是一个h1')

//使用ReactDOM将虚拟dom渲染(render)到页面上
//参数1：要渲染的那个虚拟DOM元素
//参数2：DOM元素
ReactDOM.render(
    <Test > </Test>,
    document.getElementById('app'))