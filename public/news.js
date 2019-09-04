const country_in = document.getElementById('in')
// const country_us = document.getElementById('us')

function generateCard(article) {

  return ` 
  <div class="card item" style="width: 18rem;">
    <img src="${article.urlToImage}" class="card-img-top" alt="News Image">
    <div class="card-body">
      <h5 class="card-title">${article.title}</h5>
      <p class="card-text">
        <span>${article.description}</span>
      </p>
      <div>
        <a href="${article.url}" class="btn btn-primary">Read More...</a>
      </div>
      <small class="text-muted">${article.source.name}</small><br>
      <small class="text-muted">${article.author}</small>
    </div>
  </div>
`
}

$('form').submit((event) => {
  event.preventDefault()

  async function getDataByCountry(country_name) {
    const result = document.getElementById('result')
    result.innerHTML = ""
    const news_response = await fetch(`/api/news/top-headlines/${country_name}`)
    const news_json = await news_response.json()
    const articles = news_json.articles
    articles.forEach(article => {
      const html = generateCard(article)
      result.innerHTML += html
    })
  }

  country_in.checked ?
    getDataByCountry('in') :
    getDataByCountry('us')

})