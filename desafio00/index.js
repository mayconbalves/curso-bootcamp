const express = require('express')

const server = express()

server.get('/projects', (req, res) => {
  return res.send('Hello world')
})

server.listen(4000)
