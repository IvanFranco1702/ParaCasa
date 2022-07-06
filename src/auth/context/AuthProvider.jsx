import React from 'react'
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authreducer'


const initialState = {
    logged: false
}

const initializer= ()=>{
    const user= JSON.parse(localStorage.getItem('user'))
    return {
        logged:!!user, 
        user:user
    }
}
export const AuthProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(authReducer,initialState,initializer)



    const onLogin = (name = '')=>{
        const user ={
            id: '123', 
            name: name
        }
        
    const action ={ 
        type: types.login, 
        payload:user
    }
    localStorage.setItem('user',JSON.stringify(user))
    dispatch(action)
    }
    const Logout = ()=>{
            localStorage.removeItem('user')
            const action = {type:types.logout}
            dispatch(action)
        }
  return (
    <AuthContext.Provider value ={{
        ...state,
        onLogin:onLogin, 
        Logout:Logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
