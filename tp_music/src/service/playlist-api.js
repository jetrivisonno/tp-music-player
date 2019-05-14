const db = require('../server/db')

const allPlaylist = 'select * from playlist;'

function getPlaylists (element) {
    db.connect()
    db.query(allPlaylist, [], (err, result) => {
        if (err) throw err
        if (result.rowCount > 0) {
            element.setState(result.rows) // element being this passed in parameters
        }
        db.disconnect()
    })
}

module.exports = {
    getPlaylists: getPlaylists
}
