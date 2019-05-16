import React, { Component } from 'react'

class DetailContainer extends Component {
    constructor () {
        super()
        this.state = {
            master_id: ''
        }
    }

    componentDidMount () {
        this.setState({
            master_id: 12000
        })
    }

    render () {
        return (
            <div>
                {/* */}
            </div>
        )
    }
}

export default DetailContainer
