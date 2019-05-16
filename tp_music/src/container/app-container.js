import React, { Component } from 'react'

import SearchBar from 'component/search-bar'
import PlaylistBar from '../component/playlist-bar'
import SearchResult from '../component/search-result'

const discog = require('../service/discogs')
const KEY_ENTER = 13 // in the ascii table, 13 is the carriage return key

class AppContainer extends Component {
    constructor () {
        super()
        this.state = {
            playlists: [],
            selection: [],
            name: '',
            buttonUsed: false,
            showSearchResult: false
        }
        this.search = this.search.bind(this)
        this.getPlaylists = this.getPlaylists.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    search (event) {
        if (event.charCode === KEY_ENTER) {
            discog.search(event.target.value, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({ selection: data.results })
            })
            event.target.value = ''
        } else if (this.state.buttonUsed) {
            event.preventDefault()
            discog.search(this.state.name, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({ selection: data.results })
            })
            this.setState({ buttonUsed: false })
        }
    }

    getPlaylists () {
        fetch('http://localhost:8080/apis/playlists', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ playlists: response })
            })
    }

    handleChange (event) {
        this.setState({
            name: event.target.value,
            buttonUsed: true
        })
        this.search(event)
    }

    componentDidMount () {
        if (this.state.playlists.length === 0) {
            this.getPlaylists()
        }
    }

    render () {
        return (
            <div>
                <SearchBar
                    id='searchbar_id'
                    name='searchbar'
                    methodSearch={this.search}
                    methodSubmit={this.handleChange}
                />
                <PlaylistBar
                    id='playlistbar_id'
                    name='playlistbar'
                    options={this.state.playlists}
                />
                <SearchResult
                    id='searchresult_id'
                    selections={this.state.selection}
                />
            </div>

        )
    }
}

export default AppContainer
