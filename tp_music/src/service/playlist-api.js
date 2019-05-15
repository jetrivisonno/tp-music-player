const db = require('../server/db')

function getPlaylists () {
    db.connect()
    let results = []
    // db.query('SELECT * FROM playlist;', [], (result) => {
    //     if (result.rowCount > 0) {
    //         results = result.rows
    //     }
    //     db.disconnect()
    // })
    return results
}

module.exports = {
    getPlaylists: getPlaylists
}
