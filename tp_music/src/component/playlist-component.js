import React from 'react'

function generateTrack (target, index) {
    return (
        <li key={index}>
            <h3>{target.title}</h3>
        </li>
    )
}

const PlaylistComponent = ({ list }) => (
    <ul>
        {list.map(generateTrack)}
    </ul>
)

export default PlaylistComponent
