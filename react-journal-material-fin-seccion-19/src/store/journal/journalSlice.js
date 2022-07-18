import { createSlice } from '@reduxjs/toolkit'



export const journalSlice = createSlice({
  name: 'journal',
  initialState :{
    isSaving: false,
    SaveMessage:"",
    notes:[],
    active:null
    // {
    //     id:'',
    //     title:'',
    //     body:'',
    //     date:'',
    //     imageUrls:[]
    // }

},
  reducers: {
    guardandoNuevaNota:(state)=>{
        state.isSaving = true
    },
    crearNuevaNota:(state,action)=>{
        state.notes.push(action.payload)
        state.isSaving=false

    },
    notaActiva:(state,action)=>{
        state.active= action.payload
    },
    cargaNotas:(state,action)=>{
      state.notes= action.payload
    },
    guardarNotas:(state,action)=>{

    },
    actualizarNotas:(state,action)=>{

    },
    borrarNotas:(state,action)=>{

    }
  }
});

export const {crearNuevaNota,
    notaActiva,
    cargaNotas,
    guardarNotas,
    actualizarNotas,
    borrarNotas,guardandoNuevaNota} = journalSlice.actions
