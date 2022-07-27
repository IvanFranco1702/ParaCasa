import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PrivateRoute = ({children}) => {

    const {pathname,search} = useLocation()
    // console.log(location)
    const ultimoPath = pathname + search
    localStorage.setItem('ultimoPath', ultimoPath)
    const {logged} = useContext(AuthContext)

  return (logged)? children:<Navigate to='/loggin'></Navigate>
}
