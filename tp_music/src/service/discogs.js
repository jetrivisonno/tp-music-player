const Discogs = require('disconnect').Client
const dis = new Discogs('tc_jt_ie/1.0', { userToken: 'FlXtWCIhazFneRgHbghHuXhEaYbFfThLhhIhjQBB' })

const search = function (input, pagination, callback) {
    console.log('hello')
    return dis.database().search(input, pagination, callback)
}

const getMaster = function (masterId, callback) {
    dis.database().getMaster(masterId, callback)
}

// dis.database().getMaster(106350, function (err, master) {
//     if (err) throw err
//     console.log(master)
// })

module.exports = {
    search: search,
    getMaster: getMaster
}
