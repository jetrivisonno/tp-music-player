const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8080

const HTTP_SUCCESS = 200
const CONTENT_TYPE_JSON = 'application/json'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.writeHead(HTTP_SUCCESS, { 'Content-Type': CONTENT_TYPE_JSON })
    res.end()
})

app.listen(PORT, () => {
    console.log('Listening on http://localhost:%s', PORT)
})
