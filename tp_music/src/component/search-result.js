import React from 'react'

function generateResult (selections) {
    selections.map(function (selection) {
        return (
            <div>
                <img src={selection.cover_image} />
                <div>
                    <h3>{selection.title}</h3>
                    <p>{selection.genre[0]}</p>
                </div>
            </div>
        )
    })
}

const SearchResult = ({ id, selections }) => (
    <div id={id}>
        {generateResult(selections)}
    </div>
)

export default SearchResult
