import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
  name: 'auth',
        initialState:{
        estatus:'No-Autenticado',
        uid:null, 
        email:null, 
        displayName:null, 
        photoUrl:null, 
        errorMessage:null
        },
    reducers: {
        login:(state,{payload})=>{
            state.estatus='Autenticado',
            state.uid=payload.uid, 
            state.email= payload.email, 
            state.displayName=payload.displayName, 
            state.photoUrl=payload.photoUrl, 
            state.errorMessage=null 

        },
        logout:(state,{payload})=>{

            state.estatus='No-Autenticado',
            state.uid=null, 
            state.email=null, 
            state.displayName=null, 
            state.photoUrl=null, 
            state.errorMessage=payload.errorMessage()

        },
        checkingCredentials:(state)=>{
            state.estatus=' chequeado'
        }
    },
})
export const { login,logout,checkingCredentials } = authSlice.actions