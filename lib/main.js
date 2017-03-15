'use strict'

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const Kitchen = require('./kitchen').Kitchen

let port = 3030

let staticFiles = path.join(__dirname, '../public')

let kitchen = new Kitchen()

app.set('view engine', 'ejs')
app.use(express.static(staticFiles))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.get('/kitchen-profile', (req, res) => {
  kitchen.profile._reset = false
  kitchen.profile._saved = false
  res.render('pages/kitchen-profile', kitchen.profile)
})

app.post('/kitchen-profile', (req, res) => {
  kitchen.define(req.body)
  res.render('pages/kitchen-profile', kitchen.profile)
})

app.get('/reset', (req, res) => {
  kitchen.reset()
  kitchen.profile._reset = true
  res.render('pages/kitchen-profile', kitchen.profile)
})

app.get('/search', (req, res) => {
  res.render('pages/search', {
    profile_set: kitchen._defined
  })
})

app.post('/search', (req, res) => {
  res.render('pages/search', {
    profile_set: kitchen._defined
  })
})

app.get('/recipe', (req, res) => {
  res.render('pages/recipe', {
    profile_set: kitchen._defined
  })
})

app.listen(port, () => {
  console.log('Server running')
  console.log(`  -> Go to http://localhost:${port}`)
})
