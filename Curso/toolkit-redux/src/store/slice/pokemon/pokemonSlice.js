import { createSlice } from '@reduxjs/toolkit'
export const pokemonSlice = createSlice({
  name: 'pokemon',
    initialState:{
        page: 0, 
        pokemon: [],
        isLoading: false
    },
  reducers: {
    startLoading: (state) => {
        state.isLoading= true
    },
    setPokemons:(state,action)=>{
        state.isLoading=false
        state.page = action.payload.page
        state.pokemon = action.payload.pokemon
    }

  },
})



export const { startLoading,setPokemons } = pokemonSlice.actions