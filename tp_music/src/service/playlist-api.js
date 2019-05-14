const db = require('../server/db')

const allPlaylist = 'SELECT * FROM playlist;'

function getPlaylists (element) {
    db.connect()
    db.query(allPlaylist, [], (result) => {
        if (result.rowCount > 0) {
            console.log(result.rows)
            element.setState(result.rows) // element being this passed in parameters
        }
        db.disconnect()
    })
}

module.exports = {
    getPlaylists: getPlaylists
}
