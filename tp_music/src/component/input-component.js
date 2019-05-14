import React from 'react'

const InputComponent = ({ type, id, name }) => (
    <div>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={type}
        />
    </div>
)

export default InputComponent
