import React from 'react'

const generateResult = function (selection, index, getMasterId) {
    return (
        <li key={index}>
            <img src={selection.cover_image} />
            <div>
                <h3>{selection.title}</h3>
                <div>
                    {selection.genre.map((result, index) => generateGenres(result, index))}
                </div>
                <div>
                    <button type='button' onClick={getMasterId} value={selection.master_id}>listen to album</button>
                </div>
            </div>
        </li>
    )
}

function generateGenres (genre, index) {
    return (
        <p key={index}>{genre}</p>
    )
}

const SearchResult = ({ id, selections, getMasterId }) => (
    <div id={id}>
        <ul>
            {selections.map((selection, index) => generateResult(selection, index, getMasterId))}
        </ul>
    </div>
)

export default SearchResult
