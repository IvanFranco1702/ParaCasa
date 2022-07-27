// import React from 'react'

import { pokemonsApi } from "../../../api/pokemonApi"
import { setPokemons, startLoading } from "./pokemonSlice"

export const thonks = (page=0) => {
  return async(dispatch,getpokemons)=>{
        dispatch(startLoading())
        //esto con fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page *10}`)
        // const data = await resp.json()

        //esto es con axios 
        const {data}= await pokemonsApi.get(`/pokemon?limit=10&offset=${page *10}`)
        dispatch(setPokemons({pokemon:data.results, page:page+1}))
  
    }

  
}
