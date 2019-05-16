import React, { Component } from 'react'

import SearchBar from 'component/search-bar'
import PlaylistBar from '../component/playlist-bar'
import SearchResult from '../component/search-result'
import DetailContainer from 'detail-container'

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
                this.setState({ selections: data.results })
            })
            event.target.value = ''
        } else if (this.state.searchBtnPressed) {
            event.preventDefault()
            discog.search(this.state.searchInputValue, { type: 'master', per_page: 5 }, (err, data) => {
                if (err) throw err
                this.setState({ selections: data.results })
            })
            this.setState({ searchBtnPressed: false })
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
            searchInputValue: event.target.value,
            searchBtnPressed: true
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
                {console.log(this.state.selections)}
                <SearchResult
                    id='searchresult_id'
                    selections={this.state.selections}
                />
            </div>

        )
    }
}
