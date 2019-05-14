import React from 'react'

const ButtonComponent = ({ type,onclick}) => (
    <div>
        <input
            type={type}
            onClick ={onclick}
        />
    </div>
)

export default ButtonComponent