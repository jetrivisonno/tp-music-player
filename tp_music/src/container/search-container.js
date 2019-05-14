import React, { Component } from 'react'
import InputComponent from 'component/input-component'

class SearchContainer extends Component {
    render () {
        return (
            <InputComponent
                type='search'
                id='search_id'
                name='search'
            />
        )
    }
}

export default SearchContainer
