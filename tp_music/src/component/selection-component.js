import React from 'react'

function generateSuggestion (datas) {
    return datas.map(function (data) {
        return (
            <li>
                <img src={data.coverImg} />
                <h2>{data.title}</h2>
            </li>
        )
    })
}

const SelectionComponent = ({ data }) => (
    generateSuggestion(data)
)

export default SelectionComponent
