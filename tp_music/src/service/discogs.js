const Discogs = require('disconnect').Client
const dis = new Discogs('tc_jt_ie/1.0', { userToken: 'FlXtWCIhazFneRgHbghHuXhEaYbFfThLhhIhjQBB' })

const search = dis.database().search('metal', { type: 'master', per_page: 5 }, function (err, data) {
    if (err) throw err
    console.log(data)
})

dis.database().getMaster(106350, function (err, master) {
    if (err) throw err
    console.log(master)
})

module.exports = {
    search: search
}
