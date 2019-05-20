import React, { Component } from 'react'

import PlaylistComponent from '../component/playlist-component'

class PlaylistContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            list: null
        }
    }
    getPlaylist (id) {
        fetch('http://localhost:8080/api/playlists/' + id, { method: 'GET' })
            .then(response => response.json())
            .then(response => this.setState({ list: response }))
    }
    componentDidMount () {
        if (this.state.list === null) {
            this.getPlaylist()
        }
    }
    render () {
        return (
            <div>
                {this.state.list !== null ? <PlaylistComponent list={this.state.list} /> : null}
            </div>
        )
    }
}

export default PlaylistContainer
