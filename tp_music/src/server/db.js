const { Client } = require('pg')

let client = {}

function connect () {
    client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'tp_music',
        user: 'postgres',
        password: 'postgres'
    })

    client.connect((err) => {
        if (err) throw err
    })
}

function query (query) {
    client.query(query)
        .then(res => {
            return res.rows
        })
        .catch(e => console.error(e.stack))
}

// function query (query, values, callback) {
//     client.query(query, values, (err, result) => {
//         if (err) throw err
//         callback(result)
//     })
// }

function disconnect () {
    client.end()
}

module.exports = {
    connect: connect,
    query: query,
    disconnect: disconnect
}
