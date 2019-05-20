import React from 'react'

function generateOptions (datas) {
    return datas.map(function (data, index) {
        return (
            <option key={index} value={index}>{data.title}</option>
        )
    })
}

const PlaylistBar = ({ id, name, options, onSelectChange }) => (
    <select id={id} name={name} onChange={onSelectChange}>
        {generateOptions(options)}
    </select>
)

export default PlaylistBar
