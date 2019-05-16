const db = require('../server/db')

function getPlaylists (callback) {
    db.connect()
    db.query('SELECT * FROM playlist;', [], function (result) {
        callback(result.rows)
        db.disconnect()
    })
}

module.exports = {
    getPlaylists: getPlaylists
}
