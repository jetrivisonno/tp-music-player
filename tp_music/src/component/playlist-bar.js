import React from 'react'

function generateOptions (datas) {
    return datas.map(function (data, index) {
        return (
            <option key={index} value={index}>{data.title}</option>
        )
    })
}

const PlaylistBar = ({ id, name, options, onSelectChange, activatePlaylist, selectedPlaylist }) => (
    <div id={id}>
        <button type='button' onClick={activatePlaylist}>Playlist</button>
        <select name={name} onChange={onSelectChange}>
            {generateOptions(options)}
        </select>
    </div>
)

export default PlaylistBar
