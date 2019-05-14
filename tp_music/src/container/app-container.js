import React, { Component } from 'react'

import SearchBar from 'component/search-bar'
import PlaylistBar from '../component/playlist-bar'

const discog = require('../service/discogs')
const KEY_ENTER = 13 // in the ascii table, 13 is the carriage return key

class AppContainer extends Component {
    constructor () {
        super()
        this.state = {
            playlist: [],
            selection: []
        }
        this.search = this.search.bind(this)
    }

    search (event) {
        if (event.charCode === KEY_ENTER) {
            discog.search(event.target.value, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({ selection: data.results })
            })
            event.target.value = ''
        }
    }

    render () {
        return (
            <div>
                <SearchBar
                    id='searchbar_id'
                    name='searchbar'
                    method={this.search}
                />
                <PlaylistBar
                    id='playlistbar_id'
                    name='playlistbar'
                    options={this.state.playlist}
                />
            </div>
        )
    }
}

export default AppContainer
