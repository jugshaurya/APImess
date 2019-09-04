const express = require('express')
const fetch = require('node-fetch')
const app = express()
require('dotenv').config()
app.use(express.static('public'))


const top_headline_URL = 'https://newsapi.org/v2/top-headlines'
const eveything_URL = 'https://newsapi.org/v2/everything'

app.get('/api/news/top-headlines/country/:country', async (req, res) => {
  const country = req.params.country
  if (country === 'in' || country === 'us') {
    console.log(country)
    const news_response = await fetch(`${top_headline_URL}?language=en&country=${country}&apiKey=${process.env.NEWS_API_KEY}`)
    const news_json = await news_response.json()
    res.send(news_json)
  } else {
    res.send(403)
    res.end()
  }
})

app.get('/api/news/top-headlines/category/:category', async (req, res) => {
  const category = req.params.category

  if (category === 'business' || category === 'entertainment' || category === 'general' || category === 'health' || category === 'science' || category === 'sports' || category === 'technology') {
    console.log(category)
    const news_response = await fetch(`${top_headline_URL}?language=en&category=${category}&apiKey=${process.env.NEWS_API_KEY}`)
    const news_json = await news_response.json()
    res.send(news_json)
  } else {
    res.send(403)
    res.end()
  }
})

app.get('/api/news/top-headlines/source/:source', async (req, res) => {
  const source = req.params.source
  if (source === 'bbc-news' || source === 'cnn' || source === 'fox-news' || source === 'the-new-york-times' || source === 'new-york-magazine' || source === 'the-wall-street-journal' || source === 'the-times-of-india') {
    console.log(source)
    const news_response = await fetch(`${top_headline_URL}?language=en&sources=${source}&apiKey=${process.env.NEWS_API_KEY}`)
    const news_json = await news_response.json()
    res.send(news_json)
  } else {
    res.send(403)
    res.end()
  }
})



app.get('/api/news/search/:keyword', async (req, res) => {
  try {
    const keyword = req.params.keyword
    const news_response = await fetch(`${eveything_URL}?language=en&qInTitle=${keyword}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`)
    const news_json = await news_response.json()
    res.send(news_json)
  } catch (error) {
    res.status(500)
    res.send(error)
    res.end()
  }
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log('Serving at port', PORT)
})