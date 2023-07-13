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
