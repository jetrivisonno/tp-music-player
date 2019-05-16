const db = require('../server/db')

function getPlaylists (callback) {
    db.connect()
    db.query('SELECT * FROM playlist;', [], (result) => {
        callback(result)
        db.disconnect()
    })
}

module.exports = {
    getPlaylists: getPlaylists
}
