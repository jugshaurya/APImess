const express = require('express')
const fetch = require('node-fetch')
const app = express()
require('dotenv').config()
app.use(express.static('public'))


const top_headline_URL = 'https://newsapi.org/v2/top-headlines'
app.get('/api/news/top-headlines/:country', async (req, res) => {
  const country = req.params.country
  if (country === 'in' || country === 'us'){
    console.log(country)
    const news_response = await fetch(`${top_headline_URL}?country=${country}&apiKey=${process.env.NEWS_API_KEY}`)
    const news_json = await news_response.json()
    res.send(news_json)
  }else{
    res.send(403)
    res.end()
  }
})




const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('Serving at port', PORT)    
})