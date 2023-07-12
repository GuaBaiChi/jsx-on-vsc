// https://jsonformatter.org/

// https://reactjsexample.com/tag/pokedex/
// https://pokeapi.co/api/v2
// https://pokeapi.co/api/v2/pokemon/
// https://pokeapi.co/api/v2/pokemon-form
// this one above has sprites. BAM

// https://reactjsexample.com/pokedex-using-a-external-api-and-react-hooks/
// https://github.com/muricapham/pokedex-react


// https://jsonplaceholder.typicode.com/users

// front_default

import React from 'react'

const { useEffect, useState } = React

type PokeData = {
  name: string,
  url: string
  id: number
}

type PokeApiData = {
  count: number,
  next: string,
  previous: string | null,
  results: Array<PokeData>
}

// type PokeApiSpriteData = {
//   form_name: string,
//   form_names: Array<string>,
//   form_order: number,
//   id: number,
//   is_battle_only: boolean,
//   is_default: boolean,
//   is_mega: boolean,
//   name: string,
//   sprites: string,
//   front_default: string
// }

export default function Poke() {
  const [pokeData, setPokeData] = useState<PokeApiData>()
  // let pokemon: PokeApiSpriteData = fetchPokeSprite()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-form')
      .then(response => response.json())
      .then((data: PokeApiData) => {
        setPokeData(data);
      })
  }, [])

  return (
    <ul>
      {
        pokeData?.results.map((data) => (
          <li key={data.id}>
            <a href={data.url}>
              <p>{data.name}</p>
            </a>
            {/* <img src={results} alt='portrait' /> */}
            {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt='portrait' />
          </li>
        ))
      }
    </ul>
  )
}


// export default Poke

// useEffect(() => {

// }, [])