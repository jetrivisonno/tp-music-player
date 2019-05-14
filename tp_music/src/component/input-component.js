import React from 'react'

const InputComponent = ({ type, id, name, searchbar }) => (
    <div>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={type}
            onKeyPress={searchbar}
        />
    </div>
)

export default InputComponent
