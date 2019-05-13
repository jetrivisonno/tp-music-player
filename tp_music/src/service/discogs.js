const Discogs = require('disconnect').Client
const discogs = new Discogs({ userToken: 'FlXtWCIhazFneRgHbghHuXhEaYbFfThLhhIhjQBB' })

const hello = discogs.database.search(params.query, { type: 'master', per_page: 20 }, function (error, data) {
    resultCallback(data)
})

const hi = discogs.database.getMaster(id, function (err, master) {
    resultCallback(master)
})

function resultCallback (info) {
    console.log(info)
}
