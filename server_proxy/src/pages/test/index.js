import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
export default class componentName extends Component {
     componentDidMount() {
        $.ajax({
            type : "get",//默认为get请求
            url : "/apx/api/groups/374071/users?with_invited=false", //请求的地址
            dataType : "json", // 请求文本类型数据
            success : function(data){
                console.log(data) //返回响应数据
            },
            error :function(err){
                console.log(err)//返回为错误对象，其中会包含错误信息
            }
        })
    }
    render() {
        return (
            <div className='contain'>
                <h1>测试</h1>
            </div>
        )
    }
}
