import React from 'react'

const DetailResultVideo = ({ videos, addSong, masterId }) => (
    <div>
        <ul>
            {videos.map((video, index) => trackListDisplay(video, index, addSong, masterId))}
        </ul>
    </div>
)

const trackListDisplay = (video, index, addSong, masterId) => (
    <li key={index}>
        <h3>{video.title}</h3>
        <button type='button' onClick={() => addSong(
            {
                title: video.title,
                uri: video.uri,
                masterId: masterId
            }
        )}>add to playlist</button>
    </li>
)

export default DetailResultVideo
