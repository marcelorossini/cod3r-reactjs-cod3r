// Consts
const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

// Middleware
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

// Iniciar server
server.listen(port,() => {
    console.log(`PORTA: ${port}`)
})

module.exports = server