import React, { useEffect, useState } from "react"

type PokeData = {
  name: string,
  url: string
}

type PokeApiData = {
  count: number,
  next: string,
  previous: string | null,
  results: Array<PokeData>
}

export default function Poke() {
  const [pokeData, setPokeData] = useState<PokeApiData>()

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
          <li>
            <a href={data.url}><p>{data.name}</p></a>
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

// https://reactjsexample.com/pokedex-using-a-external-api-and-react-hooks/
// https://github.com/muricapham/pokedex-react


// https://jsonplaceholder.typicode.com/users

// front_default

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{}.png