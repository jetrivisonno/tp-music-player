import React from 'react'

function generateResult (selection, index) {
    return (
        <li key={index}>
            <img src={selection.cover_image} />
            <div>
                <h3>{selection.title}</h3>
                <p>{selection.genre[0]}</p>
            </div>
        </li>
    )
}

const SearchResult = ({ id, selections }) => (
    <div id={id}>
        <ul>
            {selections.map(generateResult)}
        </ul>
    </div>
)

export default SearchResult
