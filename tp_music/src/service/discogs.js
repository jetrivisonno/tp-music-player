const Discogs = require('disconnect').Client
const dis = new Discogs('tc_jt_ie/1.0', { userToken: 'FlXtWCIhazFneRgHbghHuXhEaYbFfThLhhIhjQBB' })

const search = function (input, pagination, callback) {
    return dis.database().search(input, pagination, callback)
}

const searchMaster = function (masterId, callback) {
    return dis.database().getMaster(masterId, callback)
}

module.exports = {
    search: search,
    searchMaster: searchMaster
}
