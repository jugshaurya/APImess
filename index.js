const express = require('express')
require('dotenv').config()
const fetch = require('node-fetch')


const app = express()
const newsRouter = require('./api/newsAPI')
const pokemonRouter =require('./api/pokemonAPI')
app.use(express.static('public'))

// News API
app.use('/api/news', newsRouter)
// pokemon API
app.use('/api/pokemon', pokemonRouter)


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log('Serving at port', PORT)
})