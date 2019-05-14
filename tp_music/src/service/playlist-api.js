const db = require('../server/db')

function getPlaylists () {
    db.connect()
    db.query(query, [], callback)
    // put the db.disconnect in the callback
    // the return should get into the this.state.playlist of AppContainer
}
