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
    }
    render () {
        return (
            <div>
                <SearchContainer />
                <SelectionContainer />
            </div>
        )
    }
}

export default AppContainer
