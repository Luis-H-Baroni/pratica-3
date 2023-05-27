require('dotenv').config()
const express = require('express')
const { router } = require('./routes')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const socket = require('../main/sockets/socket')

app.use(express.json())
app.use(router)

socket(io)

server.listen(process.env.API_PORT, () =>
  console.log(`API running on localhost:${process.env.API_PORT}`)
)