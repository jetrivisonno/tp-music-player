'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8080

const playlist = require('./src/service/playlist-api')

const HTTP_SUCCESS = 200
const CONTENT_TYPE_JSON = 'application/json'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept')
    next()
})

app.get('/api/playlists', function (request, response) {
    playlist.getPlaylists(function (result) {
        response.writeHead(HTTP_SUCCESS, { 'Content-Type': CONTENT_TYPE_JSON })
        response.end(JSON.stringify(result.rows))
    })
})

app.get('/api/playlists/:id', function (request, response) {
    const id = parseInt(request.params.id)
    playlist.getPlaylistById(id, function (result) {
        response.writeHead(HTTP_SUCCESS, { 'Content-Type': CONTENT_TYPE_JSON })
        response.end(JSON.stringify(result.rows))
    })
})

app.post('/api/playlists', function (request, response) {
    const { playlistId, track } = request.body
    playlist.addToPlaylist(playlistId, track, function (result) {
        response.writeHead(HTTP_SUCCESS, { 'Content-Type': CONTENT_TYPE_JSON })
        response.end(JSON.stringify(result.rows))
    })
})

app.listen(PORT, () => {
    console.log('Listening on http://localhost:%s', PORT)
})
