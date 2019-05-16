import React from 'react'

function generateResult (selection, index) {
    return (
        <li key={index}>
            <img src={selection.cover_image} />
            <div>
                <h3>{selection.title}</h3>
                <div>
                    {selection.genre.map(generateGenres)}
                </div>
                <div>
                    <a href={'#'}>listen to album</a>
                </div>
            </div>
        </li>
    )
}

function generateGenres (genre) {
    return (
        <p>{genre}</p>
    )
}

const SearchResult = ({ id, selections, searchMaster }) => (
    <div id={id}>
        <ul>
            {selections.map(generateResult)}
        </ul>
    </div>
)

export default SearchResult
