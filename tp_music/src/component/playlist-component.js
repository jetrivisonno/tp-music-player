import React from 'react'

function generateTrack (target, index) {
    return (
        <li key={index}>
            <h3>{target.title}</h3>
        </li>
    )
}

const PlaylistComponent = ({ list }) => (
    <div>
        <ul>
            {list.map(generateTrack)}
        </ul>
    </div>
)

export default PlaylistComponent
