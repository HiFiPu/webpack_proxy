import React, { Component } from 'react'
import './index.less'
import TT from './module.jsx'
import TC from './Read.tsx'
import {
    CacheSwitch,
    CacheRoute,
    useDidCache,
    useDidRecover,
    dropByCacheKey,
    clearCache,
    getCachingKeys
  } from "react-router-cache-route";
export default class Test extends Component {
    componentDidMount(){
        console.log(CacheRoute,CacheSwitch,'xxxxxx....')
    }
    render() {
        return (
            <div>
                <h1>JS JSX WELCOME!</h1>
                <TT></TT>
                <hr/>
                <TC></TC>
            </div>
        )
    }
}
