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

    client.connect((error) => {
        if (error) throw error
    })
}

function query (query, values, callback) {
    client.query(query, values, (error, result) => {
        if (error) throw error
        callback(result)
    })
}

function disconnect () {
    client.end()
}

module.exports = {
    connect: connect,
    query: query,
    disconnect: disconnect
}
