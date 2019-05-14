import React from 'react'

const search = require('../service/discogs.js')

const doSomething = function () {
    search.search()
}

const InputComponent = ({ type, id, name }) => (
    <div>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={type}
            onBlur={doSomething}
        />
    </div>
)

export default InputComponent
