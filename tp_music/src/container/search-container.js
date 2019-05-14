import React, { Component } from 'react'
import InputComponent from 'component/input-component'

const search = require('../service/discogs.js')
const KEY_ENTER = 13 // in the ascii table, 13 is the carriage return key

const searchbar = function () {
    const input = document.getElementById('search_id')
    // if (event.charCode === KEY_ENTER) {
    //     search.search(event.target.value, { type: 'master', per_page: 5 }, function (err, data) {
    //         if (err) throw err
    //         console.log(data)
    //     })
    // }
    if (event.charCode === KEY_ENTER) {
        search.search(input.value, { type: 'master', per_page: 5 }, function (err, data) {
            if (err) throw err
            console.log(data)
        })
    }
}

class SearchContainer extends Component {
    render () {
        return (
            <header>
                <InputComponent
                    type='search'
                    id='search_id'
                    name='search'
                    searchbar={searchbar}
                />
            </header>
        )
    }
}

export default SearchContainer
