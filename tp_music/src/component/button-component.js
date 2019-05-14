import React from 'react'

const ButtonComponent = ({ type, onClick }) => (
    <div>
        <input
            type={type}
            onClick={onClick}
        />
    </div>
)

export default ButtonComponent
