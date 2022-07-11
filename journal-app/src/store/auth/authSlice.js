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
        login:(state,action)=>{

        },
        logout:(state,payload)=>{

        },
        checkingCredentials:(state)=>{

        }
    },
})
export const { login,logout,checkingCredentials } = authSlice.actions