import React, { Component } from 'react'
import Ce from '../utils/Ce.js'
export default class Son extends Component {
    render() {
        console.log(this.props.children,'this.props.children.......')
        return (
            <div>
                <Ce></Ce>
                <h1>表单。。。。。。。</h1>
                {this.props.children}
            </div>
        )
    }
}
