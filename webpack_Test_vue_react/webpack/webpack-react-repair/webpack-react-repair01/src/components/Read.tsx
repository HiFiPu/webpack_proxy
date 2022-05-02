import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import dayjs from 'dayjs'
export class Read extends Component {
    constructor(props) {
        super(props)

    }
    static propTypes = {

    }

    render() {
        dayjs().format()
        return (
            <div>
                <h1>{dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}</h1>
                <h1>{dayjs(new Date()).format('DD/MM/YYYY')}</h1>
                <h1>TSX TS WELCOME!</h1>
            </div>
        )
    }
}

export default Read
