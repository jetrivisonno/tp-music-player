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
    db.query('SELECT * FROM track where playlist_id=$1;', [id], (result) => {
        callback(result)
        db.disconnect()
    })
}

function addToPlaylist (playlistId, track, callback) { // track is object with master_id, uri and title
    db.connect()
    db.query('INSERT INTO track (playlist_id, title, uri, master_id) VALUES ($1, $2, $3, $4);', [playlistId, track.title, track.uri, track.masterId], (result) => {
        callback(result)
        db.disconnect()
    })
}

module.exports = {
    getPlaylists: getPlaylists,
    getPlaylistById: getPlaylistById,
    addToPlaylist: addToPlaylist
}
