import React from 'react'

const search = require('../service/discogs.js')

const searchbar = function () {
    search.search('metal', { type: 'master', per_page: 5 }, function (err, data) {
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
            onBlur={searchbar}
        />
    </div>
)

export default InputComponent
