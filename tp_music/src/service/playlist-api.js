const db = require('../server/db')

function getPlaylists () {
    db.connect()
    let results = []
    db.query('SELECT * FROM playlist;', [], (result) => {
        results = result
        db.disconnect()
    })
    return results
}

module.exports = {
    getPlaylists: getPlaylists
}
