class Track {
    constructor (id, playlistId, title, url, masterId, coverImg) {
        this.id = id // id
        this.playlistId = playlistId // playlist genre id
        this.title = title // title
        this.url = url // master_url
        this.masterId = masterId // master_id
        this.coverImg = coverImg // cover_image
    }
}

module.exports = Track
