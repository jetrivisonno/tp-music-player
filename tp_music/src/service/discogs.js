const Discogs = require('disconnect').Client
<<<<<<< HEAD
const discogs = new Discogs({ userToken: 'FlXtWCIhazFneRgHbghHuXhEaYbFfThLhhIhjQBB' })

const hello = discogs.database.search(params.query, { type: 'master', per_page: 20 }, function (error, data) {
    resultCallback(data)
})

const hi = discogs.database.getMaster(id, function (err, master) {
=======
const discogs = new Discogs('TPUserAgent/1.0', { userToken: 'userToken' })

discogs.database.search(params.query, { type: 'master', per_page: 20 }, function (err, data) {
    if (err) throw err
    resultCallback(data)
})

discogs.database.getMaster(id, function (err, master) {
    if (err) throw err
>>>>>>> a9006f371f1cb374bd398cd431824c54013cd2a6
    resultCallback(master)
})

function resultCallback (info) {
    console.log(info)
}
