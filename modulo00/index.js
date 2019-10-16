const express = require('express')
const server = express()

server.use(express.json())

const users = ['Camila', 'Maycon', 'Marcelo']

server.get('/users', (req, res) => {
  return res.json(users)
})

server.post('/users', (req, res) => {
  const { name } = req.body

  users.push(name)
  return res.json(users)
})
server.listen(3000)
