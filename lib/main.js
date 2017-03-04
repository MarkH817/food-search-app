const express = require('express')
const app = express()
const path = require('path')

let staticFiles = path.join(__dirname, '../public')

app.use(express.static(staticFiles))

app.listen(3030, () => {
  console.log('Example app listening on port 3030!')
})
