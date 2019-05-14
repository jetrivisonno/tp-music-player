import React from 'react'

function generateSuggestions (suggestions) {
    suggestions.map(function (suggestion) {
        return (<p>{suggestion.title}</p>) // might be something else than .title
    })
}

const SearchSuggestionComponent = ({ suggestions }) => (
    <div>
        {generateSuggestions(suggestions)}
    </div>
)

export default SearchSuggestionComponent
