import React from 'react'

function generateOptions (datas) {
    return datas.map(function (data, index) {
        return (
            <option key={index} value={index}>{data.title}</option>
        )
    })
}

const PlaylistBar = ({ id, name, options, onSelectChange, getPlaylistById, selectedPlaylist }) => (
    <div>
        <button type='button' onClick={() => getPlaylistById(selectedPlaylist)}>Playlist</button>
        <select id={id} name={name} onChange={onSelectChange}>
            {generateOptions(options)}
        </select>
    </div>
)

export default PlaylistBar
