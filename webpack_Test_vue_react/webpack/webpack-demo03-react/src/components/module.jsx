import React, { Component } from 'react'

export default class module extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date(), data: [], str: 'xxxxxxx' };
    }
    render() {
        return (
            <div>
                <h4>没有 cellpadding：{this.state.data?.name} {this.state.str}</h4>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>First</td>
                            <td>Row</td>
                        </tr>
                        <tr>
                            <td>Second</td>
                            <td>Row</td>
                        </tr>
                    </tbody>
                </table>

                <h4>带有 cellpadding：</h4>
                <table border="1"
                    cellPadding="10">
                    <tbody>
                        <tr>
                            <td>First</td>
                            <td>Row</td>
                        </tr>
                        <tr>
                            <td>Second</td>
                            <td>Row</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
