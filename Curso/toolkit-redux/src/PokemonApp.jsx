import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thonks } from './store/slice/pokemon'

export const PokemonApp = () => {
    const {page,isLoading,pokemon} = useSelector(state=>state.pokemons)
    const dispatch =useDispatch()
    
    useEffect(() => {
      dispatch(thonks())
    }, [])
    
    return (
        <>
        <h1>pokemon app </h1>
        <hr />
        <span> Cargando...{isLoading ? 'true':'false'}</span>
        <ul>
            {pokemon.map((pokemon1)=>{
                return(
                    <li key={pokemon1.name}>{pokemon1.name}</li>
                )
            })}
        </ul>
        <button
        disabled={isLoading}
        onClick={()=>(dispatch(thonks(page)))}>
            otro

        </button>
        
        
        
        </>
    )
}
