import React from 'react'

const SearchBar = ({ id, name, method, type, onClick }) => (
    <div>
        <input id={id} type='search' name={name} placeholder={name} onKeyPress={method} />
        <button type={type} onClick={onClick}>Submit</button>
    </div>
)

export default SearchBar
