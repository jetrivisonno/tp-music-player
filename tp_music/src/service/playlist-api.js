const db = require('../server/db')

function getPlaylists () {
    db.connect()
    db.query('SELECT * FROM playlist;', [], function (result) {
        console.log(result.rows)
        db.disconnect()
    })
}

module.exports = {
    getPlaylists: getPlaylists
}
