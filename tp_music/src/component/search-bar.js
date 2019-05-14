import React from 'react'

const SearchBar = ({ id, name, method }) => (
    <div>
        <input id={id} type='search' name={name} placeholder={name} onKeyPress={method} />
        {/* insert button here */}
    </div>
)

export default SearchBar
