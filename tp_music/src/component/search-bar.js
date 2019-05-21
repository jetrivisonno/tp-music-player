import React from 'react'

const SearchBar = ({ id, name, methodSearch }) => (
    <div id={id}>
        <input type='search' name={name} placeholder={name} onKeyPress={methodSearch} />
    </div>
)

export default SearchBar
