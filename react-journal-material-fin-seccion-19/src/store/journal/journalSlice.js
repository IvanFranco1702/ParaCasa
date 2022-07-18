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
        state.SaveMessage=''
    },
    cargaNotas:(state,action)=>{
      state.notes= action.payload
    },
    guardarNotas:(state,action)=>{
    state.isSaving = true
    state.SaveMessage= ""

    },
    actualizarNotas:(state,action)=>{
      state.isSaving= false
      state.notes = state.notes.map(note=>{
        if(note.id===  action.payload.id ){
          return action.payload
        }
        return note
      })

      state.SaveMessage= `${action.payload.title }, ha sido actualizada`
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
