import React from 'react'

function generateOptions (datas) {
    return datas.map(function (data, index) {
        return (
            <option key={index} value={index}>{data.title}</option>
        )
    })
}

const PlaylistBar = ({ id, name, options }) => (
    <select id={id} name={name}>
        {generateOptions(options)}
    </select>
)

export default PlaylistBar
