const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8080

const HTTP_SUCCESS = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.writeHead(HTTP_SUCCESS, { 'Content-Type': CONTENT_TYPE_JSON })
    console.log('hello')
    res.sendFile('src/index.html', { 'Content-Type': CONTENT_TYPE_HTML})
})

app.listen(PORT, () => {
    console.log('Listening on http://localhost:%s', PORT)
})
