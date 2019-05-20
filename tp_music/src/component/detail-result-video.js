import React from 'react'

const DetailResultVideo = ({ videos }) => (
    <div>
        <ul>
            {videos.map((video, index) => trackListDisplay(video, index))}
        </ul>
    </div>
)

const trackListDisplay = (video, index) => (
    <li key={index}>
        <p>{video.title}</p>
        <p>{video.uri}</p>
    </li>
)

export default DetailResultVideo
