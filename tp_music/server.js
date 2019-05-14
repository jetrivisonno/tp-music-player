const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8080

const HTTP_SUCCESS = 200
const CONTENT_TYPE_JSON = 'application/json'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    // require the discog up top
    // insert discog method to fetch info from api
    // read the data
})

app.listen(PORT, () => {
    console.log('Listening on http://localhost:%s', PORT)
})
