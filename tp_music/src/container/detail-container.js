import React, { Component } from 'react'

import DetailResultVideo from 'component/detail-result-video'

const discog = require('../service/discogs')

class DetailContainer extends Component {
    constructor (props) {
        super()

        this.props = props

        this.state = {
            displayDetailComponent: false,
            videoList: []
        }

        this.searchMaster = this.searchMaster.bind(this)
    }

    componentDidMount () {
        this.searchMaster(this.props.masterId)
    }

    searchMaster (masterId) {
        discog.searchMaster(masterId, (err, master) => {
            if (err) throw err
            this.setState({
                videoList: master.videos
            })
            console.log(this.state.videoList)
        })
    }

    render () {
        return (
            <div>
                <DetailResultVideo
                    videos={this.state.videoList}
                />
            </div>
        )
    }
}

export default DetailContainer
