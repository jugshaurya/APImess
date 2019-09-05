const express = require('express')
require('dotenv').config()


const app = express()
const newsRouter = require('./api/newsAPI')
app.use(express.static('public'))

// News API
app.use('/api/news', newsRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log('Serving at port', PORT)
})