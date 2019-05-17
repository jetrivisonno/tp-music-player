import React from 'react'

const DetailResultVideo = ({ videos }) => (
    <div>
        {videos.map((video, index) => trackListDisplay(video, index))}
    </div>
)

const trackListDisplay = (video, index) => (
    <div key={index}>
        <p>{video.title}</p>
        <p>{video.uri}</p>
    </div>
)

export default DetailResultVideo
