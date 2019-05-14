import React from 'react'

const SearchBar = ({ id, name, method }) => (
    <div>
        <input id={id} type='search' name={name} placeholder={name} onKeyPress={method} />
        <input type='submit' onClick={method} value='search' />
    </div>
)

export default SearchBar
