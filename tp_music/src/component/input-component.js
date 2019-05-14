import React from 'react'

const search = require('../service/discogs.js')

const searchbar = function (event) {
    search.search(event.target.value, { type: 'master', per_page: 5 }, function (err, data) {
        if (err) throw err
        console.log(data)
    })
}

const InputComponent = ({ type, id, name }) => (
    <div>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={type}
            onClick={searchbar}
        />
    </div>
)

export default InputComponent
