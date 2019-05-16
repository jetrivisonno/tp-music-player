'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8080

const playlist = require('./src/service/playlist-api')

const HTTP_SUCCESS = 200
const CONTENT_TYPE_JSON = 'application/json'
// const CONTENT_TYPE_HTML = 'text/html'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

<<<<<<< HEAD
app.get('/playlists', (req, res) => {
    console.log('hello')
    playlist.getPlaylists(function (result) {
        const data = JSON.stringify(result)
        res.writeHead(HTTP_SUCCESS, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(data)
=======
app.get('/', function (request, response) {
    playlist.getPlaylists(function (result) {
        response.writeHead(HTTP_SUCCESS, { 'Content-Type': CONTENT_TYPE_JSON })
        response.end(JSON.stringify(result.rows))
>>>>>>> 7aeca04020108a5627068535ac150fd13c182d36
    })
})

app.listen(PORT, () => {
    console.log('Listening on http://localhost:%s', PORT)
})
