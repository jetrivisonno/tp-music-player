import React, { Component } from 'react'
import InputComponent from 'component/input-component'
import ButtonComponent from 'component/button-component'

const search = require('../service/discogs.js')
const KEY_ENTER = 13 // in the ascii table, 13 is the carriage return key

class SearchContainer extends Component {
    onInputComplete (event) {
        if (event.charCode === KEY_ENTER) {
            search.search(event.target.value, { type: 'master', per_page: 10 }, function (err, data) {
                if (err) throw err
                console.log(data.results)
                // instead of logging the data, send to the display component for the user to choose from
            })
        }
    }

    searchString () {
        //
    }

    render () {
        return (
            <header>
                <InputComponent
                    type='search'
                    id='search_id'
                    name='search'
                    searchbar={this.onInputComplete}
                />
                <ButtonComponent
                    type='submit'
                    onClick={this.onInputComplete}
                />
            </header>
        )
    }
}

export default SearchContainer
