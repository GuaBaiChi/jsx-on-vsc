import React, { useEffect, useState } from "react"

type PokeData = {
  name: string,
  url: string,
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
//   name: string
// }

export default function Poke() {
  const [pokeData, setPokeData] = useState<PokeApiData>()

  // const [pokeData2, setPokeData2] = useState<PokeApiData>()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-form')
      .then(response => response.json())
      .then((data: PokeApiData) => {
        setPokeData(data);
      })
  }, [])

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon-form/1')
  //     .then(response2 => response2.json())
  //     .then((data2: PokeApiData) => {
  //       setPokeData2(data2);
  //     })
  // }, [])

  const getImgUrl = (url: string) => {
    let urlParts = url.split("/")
    let pokemonId = urlParts[urlParts.length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
  }

  return (
    <ul>
      {
        pokeData?.results.map((data) => (
          <li>
            <a href={data.url}><p>{data.name}</p>
              <img src={getImgUrl(data.url)} alt={data.name} />
            </a>
          </li>
        ))
      }
    </ul>
  )
}


// export default Poke

// useEffect(() => {

// }, [])


// https://jsonformatter.org/

// https://reactjsexample.com/tag/pokedex/
// https://pokeapi.co/api/v2
// https://pokeapi.co/api/v2/pokemon/
// https://pokeapi.co/api/v2/pokemon-form
// this one above has sprites. BAM

// ex1
// https://reactjsexample.com/pokedex-using-a-external-api-and-react-hooks/

// ex2
// https://reactjsexample.com/the-pokedex-project-using-react-js-and-pokeapi/
// https://github.com/muricapham/pokedex-react


// https://jsonplaceholder.typicode.com/users

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{}.png