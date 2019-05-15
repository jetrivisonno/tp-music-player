import React from 'react'

const SearchBar = ({ id, name, method, value, onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <input id={id} type='search' name={name} placeholder={name} onKeyPress={method} onChange={onChange} />
        <button>submit</button>
    </form>
)

export default SearchBar
