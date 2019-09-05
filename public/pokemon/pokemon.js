const result = document.getElementById('result')
const result1 = document.getElementById('result1')

function generateCard(data, image_URL) {

  return `
  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="${image_URL}">
          </div>
          <div class="card-content">
            <span class="card-title">${data.name}</span>
            <p><span>Type : </span> ${data.type[0]}</p>
            <p><span>HP : </span>${data.base.HP}</p>
            <p><span>Attack : </span>${data.base.Attack}</p>
            <p><span>Defense : </span>${data.base.Defense}</p>
            <p><span>Special Attack : </span>${data.base.SpAttack}</p>
            <p><span>Sp.Defense : </span>${data.base.SpDefense}</p>
            <p><span>Speed : </span>${data.base.Speed}</p>
            <p><span>Height : </span>${data.height}m</p>
        </div>
      </div>
    </div>
  </div>
  `
}

function generateRandomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

async function fetchPokemon(pokemon_id, element) {
    const pokemon_res = await fetch(`/api/pokemon/${pokemon_id}`)
    const pokemon_data = await pokemon_res.json()
    const pokemon_image_res = await fetch(`/api/pokemon/image/${pokemon_id}`)
    const pokemon_image = await pokemon_image_res.blob()
    const pokemon_image_URL = URL.createObjectURL(pokemon_image)
    element.innerHTML = generateCard(pokemon_data, pokemon_image_URL)
    console.log(pokemon_data)
}

// pass from 0 to 800 only or number inside this range 
fetchPokemon(generateRandomInt(0, 800), result)
fetchPokemon(generateRandomInt(0, 800), result1)

