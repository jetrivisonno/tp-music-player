import React from 'react'

const DetailResultVideo = ({ videos, addSong }) => (
    <div>
        <ul>
            {videos.map((video, index) => trackListDisplay(video, index, addSong))}
        </ul>
    </div>
)

const trackListDisplay = (video, index, addSong) => (
    <li key={index}>
        <p>{video.title}</p>
        <p>{video.uri}</p>
        <button type='button' onClick={addSong({ title: video.title, uri: video.uri, masterId: 6589 })}>Add</button>
    </li>
)

export default DetailResultVideo
