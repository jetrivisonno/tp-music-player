const db = require('../server/db')

function getPlaylists (callback) {
    db.connect()
    db.query('SELECT * FROM playlist;', [], (result) => {
        callback(result)
        db.disconnect()
    })
}

function getPlaylistById (id, callback) {
    db.connect()
    db.query('SELECT * FROM track where playlist_id=:id;', [id], (result) => {
        callback(result)
        db.disconnect()
    })
}

module.exports = {
    getPlaylists: getPlaylists,
    getPlaylistById: getPlaylistById
}
