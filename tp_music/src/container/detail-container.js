import React, { Component } from 'react'

import DetailResultVideo from 'component/detail-result-video'
import YouTube from 'react-youtube'

const discog = require('../service/discogs')

class DetailContainer extends Component {
    constructor (props) {
        super(props)

        // this.props = props

        this.state = {
            displayDetailComponent: false,
            videoList: [],
            showVideo: false,
            counter: 0,
            masterId: null
        }

        this.searchMaster = this.searchMaster.bind(this)
        this.playNext = this.playNext.bind(this)
        this.playPrevious = this.playPrevious.bind(this)
        this.addSong = this.addSong.bind(this)
    }

    componentDidMount () {
        if (this.state.masterId !== this.props.masterId) {
            this.setState({
                masterId: parseInt(this.props.masterId)
            })
        }
        this.searchMaster(this.props.masterId)
    }

    searchMaster (masterId) {
        discog.searchMaster(masterId, (err, master) => {
            if (err) throw err
            this.setState({
                videoList: master.videos,
                showVideo: true
            })
        })
    }

    playNext () {
        if (this.state.counter < (this.state.videoList.length - 1)) {
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

    addSong (track) {
        fetch('http://localhost:8080/api/playlists',
            { method: 'POST',
                body: JSON.stringify({ playlistId: this.props.selectedPlaylist, track: track }),
                headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(response => console.log(response))
    }

    render () {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        }

        console.log(this.state.masterId)

        return (

            <div>
                <div>
                    {this.state.showVideo
                        ? <YouTube
                            videoId={this.state.videoList[this.state.counter].uri.substr(32)} // defaults -> null
                            opts={opts}
                            onEnd={this.playNext}
                        /> : <div />}
                    <div>
                        <button type='button' onClick={this.playPrevious}>Prev</button>
                        <button type='button' onClick={this.playNext}>Next</button>
                    </div>
                </div>
                {this.state.masterId === parseInt(this.props.masterId)
                    ? <DetailResultVideo
                        videos={this.state.videoList}
                        addSong={this.addSong}
                        masterId={this.state.masterId}
                    /> : null}
            </div>
        )
    }
}

export default DetailContainer
