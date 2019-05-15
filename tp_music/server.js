'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const path = require('path')
const PORT = 8080

const playlist = require('./src/service/playlist-api')

const HTTP_SUCCESS = 200
const CONTENT_TYPE_JSON = 'application/json'
<<<<<<< HEAD
const CONTENT_TYPE_HTML = 'text/html'
=======
// const CONTENT_TYPE_HTML = 'text/html'
>>>>>>> 295bf9ee741a5d7ddae06987df4d87538540a0ff

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/api/playlist', (req, res) => {
    console.log(playlist.getPlaylists())
    res.writeHead(HTTP_SUCCESS, { 'Content-Type': CONTENT_TYPE_JSON })
    console.log('hello')
    res.sendFile('src/index.html', { 'Content-Type': CONTENT_TYPE_HTML})
})

app.listen(PORT, () => {
    console.log('Listening on http://localhost:%s', PORT)
})
