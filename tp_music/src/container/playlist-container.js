import React, { Component } from 'react'

import PlaylistComponent from '../component/playlist-component'
import Youtube from 'react-youtube'

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
            this.getPlaylist(this.props.selectedPlaylist)
        }
    }

    render () {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        }
        return (
            <div>
                <YouTube
                    videoId={this.state.videoList[this.state.counter].uri.substr(32)} // defaults -> null
                    opts={opts}
                    onEnd={this.playNext}
                />
                {this.state.list !== null ? <PlaylistComponent list={this.state.list} /> : null}
            </div>
        )
    }
}

export default PlaylistContainer
