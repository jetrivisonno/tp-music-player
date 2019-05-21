import React, { Component } from 'react'

import SearchBar from 'component/search-bar'
import PlaylistBar from '../component/playlist-bar'
import PlaylistContainer from '../container/playlist-container'
import SearchResult from '../component/search-result'
import DetailContainer from 'container/detail-container'

import '../css/main.css'

const discog = require('../service/discogs')
const KEY_ENTER = 13 // in the ascii table, 13 is the carriage return key

class AppContainer extends Component {
    constructor () {
        super()
        this.state = {
            playlists: [],
            selections: [],
            showSearchResult: false,
            showDetailContainer: false,
            showPlaylist: false,
            masterId: '',
            selectedPlaylist: 1,
            playlistSelectLoaded: false
        }
        this.search = this.search.bind(this)
        this.getPlaylists = this.getPlaylists.bind(this)
        this.getMasterId = this.getMasterId.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
        this.activatePlaylist = this.activatePlaylist.bind(this)
    }

    search (event) {
        if (event.charCode === KEY_ENTER) {
            discog.search(event.target.value, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({
                    selections: data.results,
                    showSearchResult: true,
                    showPlaylist: false,
                    showDetailContainer: false
                })
            })
            event.target.value = ''
        }
    }

    getMasterId (event) {
        this.setState({
            masterId: event.target.value,
            showSearchResult: false,
            showDetailContainer: true,
            showPlaylist: false
        })
    }

    getPlaylists () {
        fetch('http://localhost:8080/api/playlists', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    playlists: response,
                    playlistSelectLoaded: true
                })
            })
    }

    onSelectChange (event) {
        this.setState({
            selectedPlaylist: parseInt(event.target.value) + 1
        })
    }

    activatePlaylist () {
        this.setState({ showPlaylist: false })
        setTimeout(() => {
            this.setState({
                showPlaylist: true,
                showSearchResult: false,
                showDetailContainer: false
            })
        }, 10)
    }

    componentDidMount () {
        if (this.state.playlists.length === 0) {
            this.getPlaylists()
        }
        this.setState({
            showPlaylist: true
        })
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
                    onSelectChange={this.onSelectChange}
                    activatePlaylist={this.activatePlaylist}
                    selectedPlaylist={this.state.selectedPlaylist}
                />
                {this.state.showPlaylist && this.state.playlistSelectLoaded
                    ? <PlaylistContainer
                        selectedPlaylist={this.state.selectedPlaylist}
                        list={this.state.list}
                        getPlaylistById={this.getPlaylistById}
                    /> : null}
                {this.state.showSearchResult
                    ? <SearchResult
                        id='searchresult_id'
                        selections={this.state.selections}
                        getMasterId={this.getMasterId}
                    /> : null}
                {this.state.showDetailContainer
                    ? <DetailContainer
                        masterId={this.state.masterId}
                        selectedPlaylist={this.state.selectedPlaylist}
                    /> : null}
            </div>

        )
    }
}

export default AppContainer
