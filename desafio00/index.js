const express = require('express')

const server = express()
server.use(express.json())

const projects = []

server.get('/projects', (req, res) => {
  return res.send('Hello world')
})

server.post('/projects', (req, res) => {
  const { id, title } = req.body

  projects.push({ id, title })
  return res.json(projects)
})

server.listen(4000)