'use strict'

const express = require('express')
const app = express()
const path = require('path')

let port = 3030

let staticFiles = path.join(__dirname, '../public')

app.set('view engine', 'ejs')
app.use(express.static(staticFiles))

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.get('/kitchen-profile', (req, res) => {
  res.render('pages/kitchen-profile')
})

app.get('/search', (req, res) => {
  res.render('pages/search')
})

app.get('/recipe', (req, res) => {
  let query = ''
  let results = []

  res.render('pages/recipe', {
    query: query,
    results: results
  })
})

app.listen(port, () => {
  console.log('Server running')
  console.log(`  -> Go to http://localhost:${port}`)
})
