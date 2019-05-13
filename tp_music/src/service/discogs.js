const Discogs = require('disconnect').Client
const discogs = new Discogs('TPUserAgent/1.0', { userToken: 'userToken' })

discogs.database.search(params.query, { type: 'master', per_page: 20 }, function (err, data) {
    if (err) throw err
    resultCallback(data)
})

discogs.database.getMaster(id, function (err, master) {
    if (err) throw err
    resultCallback(master)
})
