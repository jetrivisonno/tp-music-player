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
            searchInputValue: '',
            searchBtnPressed: false,
            showSearchResult: false,
            showDetailContainer: false,
            showPlaylist: false,
            masterId: '',
            selectedPlaylist: 1
        }
        this.search = this.search.bind(this)
        this.getPlaylists = this.getPlaylists.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getMasterId = this.getMasterId.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
    }

    search (event) {
        if (event.charCode === KEY_ENTER) {
            discog.search(event.target.value, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({
                    selections: data.results,
                    showSearchResult: true
                })
            })
            event.target.value = ''
        } else if (this.state.searchBtnPressed) {
            event.preventDefault()
            discog.search(this.state.searchInputValue, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({
                    selections: data.results,
                    showSearchResult: true
                })
            })
            this.setState({ searchBtnPressed: false
            })
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
                this.setState({ playlists: response })
            })
    }

    handleChange (event) {
        this.setState({
            searchInputValue: event.target.value,
            searchBtnPressed: true
        })
        this.search(event)
    }

    onSelectChange (event) {
        this.setState({
            selectedPlaylist: event.target.value + 1
        })
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
                />
                {/* this.state.showPlaylist
                    ? <PlaylistContainer
                        selectedPlaylist={this.state.selectedPlaylist}
                /> : null */}
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
