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
        console.log('connected to database')
    })
}

function query (query, values, callback) {
    client.query(query, values, (err, result) => {
        if (err) throw err
        console.log('fetched from database')
        callback(result)
    })
}

function disconnect () {
    client.end()
    console.log('disconnected to database')
}

module.exports = {
    connect: connect,
    query: query,
    disconnect: disconnect
}
