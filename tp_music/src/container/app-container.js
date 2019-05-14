import React, { Component } from 'react'

import SearchContainer from 'container/search-container'
import SelectionContainer from 'container/selection-container'

class AppContainer extends Component {
    constructor () {
        super()
        this.state = {
            selection: []
        }
<<<<<<< HEAD
        this.createData = this.createData.bind(this)
    }

    createData (x) {
        this.setState({ data: x })
=======
        this.getResult = this.getResult.bind(this)
    }

    /**
     *
     * @param {array containing results from discogs API} result
     */
    getResult (result) {
        console.log(result)
        // this.setState({ selection: result })
>>>>>>> be54aa7f85776bcd6b0d550564ca5f9c3fdb368e
    }

    render () {
        return (
            <div>
<<<<<<< HEAD
                <SearchContainer createDataArray={this.createData} />
                <SelectionContainer />
=======
                <SearchContainer getResult={this.getResult} />
                {/* <SelectionContainer /> */}
>>>>>>> be54aa7f85776bcd6b0d550564ca5f9c3fdb368e
            </div>
        )
    }
}

export default AppContainer
