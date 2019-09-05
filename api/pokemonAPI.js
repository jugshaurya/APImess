const route = require('express').Router()
const fs = require('fs')
const path = require('path')

function getProperIdAccordingToImage(id) {
    if (id < 10) {
        return '00' + String(id)
    } else if (id < 100) {
        return '0' + String(id)
    } else {
        return String(id)
    }
}

route.get('/:id', async (req, res) => {
    const id = req.params.id
    fs.readFile('public/pokemon/pokemon.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            // console.log(data[0])
            const pokemons = JSON.parse(data)
            res.json(pokemons[id])
        }
    })
})

route.get('/image/:id', async (req, res) => {
    const id = parseInt(req.params.id) + 1 // images are starting from 001 

    const image_id = getProperIdAccordingToImage(id)
    res.sendFile(`pokemon/pokemon_images/${image_id}.png`, {
        root: path.join(__dirname, '../public'),
        headers: {
            'Content-Type': 'image/jpeg'
        }
    })
    // fs.readFile(, 'utf8', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //         res.sendStatus(500)
    //     } else {
    //         res.writeHead(200, {'Content-Type': 'image/jpeg'});
    //         console.log(data)
    //         // const pokemons = JSON.parse(data)
    //         res.send('ok')
    //     }
    // })

    // const pokemon_img_res = await fetch()
    // res.sendFile(`./pokemon_images/${image_id}.png`)

    // const pokemons = await pokemons_response.json()
    // const pokemon = pokemons[id]
    // res.json(pokemon)
})

module.exports = route;