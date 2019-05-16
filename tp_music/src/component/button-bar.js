import React from 'react'

const ButtonBar = ({ type, onClick }) => (
    <div>
        <button type={type} onClick={onClick}>Submit</button>
    </div>
)

export default ButtonBar
