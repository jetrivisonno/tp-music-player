import React from 'react'

const SearchBar = ({ id, name, methodSearch, methodSubmit }) => (
    <div>
        <input id={id} type='search' name={name} placeholder={name} onKeyPress={methodSearch} />
        <input type='submit' onClick={methodSubmit} value={name} />
    </div>
)

export default SearchBar
