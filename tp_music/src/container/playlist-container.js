import React, { Component } from 'react'

import PlaylistComponent from '../component/playlist-component'
import Youtube from 'react-youtube'

class PlaylistContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            list: null,
            counter: 0
        }

        this.playNext = this.playNext.bind(this)
        this.playPrevious = this.playPrevious.bind(this)
    }

    getPlaylist (id) {
        fetch('http://localhost:8080/api/playlists/' + id, { method: 'GET' })
            .then(response => response.json())
            .then(response => this.setState({
                list: response,
                counter: 0
            }))
    }

    playNext () {
        if (this.state.counter < (this.state.list.length - 1)) {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }

    playPrevious () {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    componentDidMount () {
        if (this.state.list === null) {
            this.getPlaylist(this.props.selectedPlaylist)
        }
    }
    componentWillUnmount () {
        this.setState({
            list: null
        })
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
            <div id={this.props.id}>
                {this.state.list !== null
                    ? <Youtube
                        videoId={this.state.list[this.state.counter].uri.substr(32)} // defaults -> null
                        opts={opts}
                        onEnd={this.playNext}
                    /> : null}
                <div>
                    <button type='button' onClick={this.playPrevious}>Prev</button>
                    <button type='button' onClick={this.playNext}>Next</button>
                </div>
                {this.state.list !== null
                    ? <PlaylistComponent
                        list={this.state.list}
                        id='playlist-list'
                    /> : null}
            </div>
        )
    }
}

export default PlaylistContainer
