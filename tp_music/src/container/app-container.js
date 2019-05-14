import React, { Component } from 'react'

import SearchContainer from 'container/search-container'
import SelectionContainer from 'container/selection-container'

class AppContainer extends Component {
    constructor () {
        super()
        this.state = {
            data: [],
            searchData: []
        }
        this.createData = this.createData.bind(this)
    }

    createData (x) {
        this.setState({ data: x })
    }

    render () {
        return (
            <div>
                <SearchContainer createDataArray={this.createData} />
                <SelectionContainer />
            </div>
        )
    }
}

export default AppContainer
