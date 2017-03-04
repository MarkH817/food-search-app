'use strict'

const express = require('express')
const app = express()
const path = require('path')

let port = 3030

let staticFiles = path.join(__dirname, '../public')

app.use(express.static(staticFiles))

app.get('/hello', (req, res) => {
  let greet = `<h3>Hello, ${req.query.name}</h3>`
  res.send(greet)
})

app.listen(port, () => {
  console.log('Server running')
  console.log(`Go to http://localhost:${port}`)
})
