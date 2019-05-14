import React from 'react'

const InputComponent = ({ text, type, id, name }) => (
    <div>
        <label htmlFor={id}>{text}</label>
        <input
            type={type}
            id={id}
            name={name}
        />
    </div>
)

export default InputComponent
