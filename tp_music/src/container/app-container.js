import React, { Component } from 'react'

import SearchBar from 'component/search-bar'
import PlaylistBar from '../component/playlist-bar'

const discog = require('../service/discogs')
const KEY_ENTER = 13 // in the ascii table, 13 is the carriage return key

class AppContainer extends Component {
    constructor () {
        super()
        this.state = {
            playlists: [],
            selection: []
        }
        this.search = this.search.bind(this)
        this.getPlaylists = this.getPlaylists.bind(this)
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

    getPlaylists () {
        fetch('http://localhost:8080/api/playlists', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ playlists: response })
            })
    }

    render () {
        this.getPlaylists()
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
                    options={this.state.playlists}
                />
            </div>
        )
    }
}

export default AppContainer
