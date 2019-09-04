const result = document.getElementById('result')

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
  const form_id = event.target.id
  const form_children_length = event.target.length
  const options = event.target.children
  let option_id = ""
  for (let i = 0; i < form_children_length - 1; i++) {
    const first_child = options[i].children[0]
    const isChecked = first_child.checked
    if (isChecked) {
      option_id = first_child.id
      break
    }
  }

  switch (form_id) {
    case 'country-news':
      getNewsByCountry(option_id)
      break;

    case 'category-news':
      console.log(option_id)
      getNewsByCategory(option_id)
      break;
  }

  async function getNewsByCountry(country_name) {
    result.innerHTML = ""
    const news_response = await fetch(`/api/news/top-headlines/country/${country_name}`)
    const news_json = await news_response.json()
    const articles = news_json.articles
    articles.forEach(article => {
      const html = generateCard(article)
      result.innerHTML += html
    })
  }


  async function getNewsByCategory(category_name) {
    result.innerHTML = ""
    const news_response = await fetch(`/api/news/top-headlines/category/${category_name}`)
    const news_json = await news_response.json()
    const articles = news_json.articles
    articles.forEach(article => {
      const html = generateCard(article)
      result.innerHTML += html
    })
  }

})