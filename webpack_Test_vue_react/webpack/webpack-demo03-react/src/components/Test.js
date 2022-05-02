import React, { Component } from 'react'
import './index.less'
import TT from './module.jsx'
import TC from './Read.tsx'
import axios from "axios";
export default class Test extends Component {
    // https://api.hongbeibang.com/education/getIndexByWeb
    componentDidMount() {
        axios.get('/mock', { dataType: 'json' }) //这列的'/mock'与mock.js文件里的地址一致
            .then(res => {
                console.log(res.data.userinfo)
            })
    }
    render() {
        return ( 
        <div>
            <h1> JS JSX WELCOME! </h1>
            <TT> </TT> <hr/>
            <TC> </TC> 
        </div>
        )
    }
}