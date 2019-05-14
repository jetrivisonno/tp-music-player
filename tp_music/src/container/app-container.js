import React, { Component } from 'react'

import SearchContainer from 'container/search-container'
import SelectionContainer from 'container/selection-container'

class AppContainer extends Component {
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
