import React from 'react'

const search = require('../service/discogs.js')

<<<<<<< HEAD
const searchbar = function (event) {
    search.search(event.target.value, { type: 'master', per_page: 5 }, function (err, data) {
        if (err) throw err
        console.log(data)
    })
=======
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
>>>>>>> c929a01a9f7cc4f913d9b71466d973aa72aa2bd6
}

const InputComponent = ({ type, id, name }) => (
    <div>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={type}
<<<<<<< HEAD
            onClick={searchbar}
=======
            onKeyPress={searchbar}
>>>>>>> c929a01a9f7cc4f913d9b71466d973aa72aa2bd6
        />
    </div>
)

export default InputComponent
