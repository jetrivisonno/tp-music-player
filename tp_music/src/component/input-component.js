import React from 'react'

const search = require('../service/discogs.js')

const searchbar = function () {
    const input = document.getElementById('search_id')
    // if (event.charCode === 13) {
    //     search.search(event.target.value, { type: 'master', per_page: 5 }, function (err, data) {
    //         if (err) throw err
    //         console.log(data)
    //     })
    // }
    if (event.charCode === 13) {
        search.search(input.value, { type: 'master', per_page: 5 }, function (err, data) {
            if (err) throw err
            console.log(data)
        })
    }
}

const InputComponent = ({ type, id, name }) => (
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
