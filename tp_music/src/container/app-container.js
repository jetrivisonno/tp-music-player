import React, { Component } from 'react'

import SearchContainer from 'container/search-container'
// import SelectionContainer from 'container/selection-container'

class AppContainer extends Component {
    constructor () {
        super()
        this.state = {
            selection: []
        }
        this.getResult = this.getResult.bind(this)
    }

    /**
     *
     * @param {array containing results from discogs API} result
     */
    getResult (result) {
        console.log(result)
        // this.setState({ selection: result })
    }

    render () {
        return (
            <div>
                <SearchContainer getResult={this.getResult} />
                {/* <SelectionContainer /> */}
            </div>
        )
    }
}

export default AppContainer
