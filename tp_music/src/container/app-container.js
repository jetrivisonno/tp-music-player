import React, { Component } from 'react'

import SearchBar from 'component/search-bar'
import PlaylistBar from '../component/playlist-bar'
import ButtonBar from 'component/button-bar'

const discog = require('../service/discogs')
const KEY_ENTER = 13 // in the ascii table, 13 is the carriage return key
class AppContainer extends Component {
    constructor () {
        super()
        this.state = {
            playlist: [],
            selection: [],
            name: ''
        }
        this.search = this.search.bind(this)
        this.getPlaylists = this.getPlaylists.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleIn = this.handleChange.bind(this)
    }

    search (event) {
        if (event.charCode === KEY_ENTER) {
            discog.search(event.target.value, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({ selection: data.results })
            })
            event.target.value = ''
        } else {
            event.preventDefault()
            console.log(this.state.name)
            discog.search(this.state.name, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({ selection: data.results })
                console.log(this.state.selection)
            })
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
            name: event.target.value
        })
    }

    render () {
        if (this.state.playlist.length === 0) {
            this.getPlaylists()
        }

        return (
            <div>
                <SearchBar
                    id='searchbar_id'
                    name='searchbar'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <ButtonBar
                    type='button'
                    onClick={this.search}
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
