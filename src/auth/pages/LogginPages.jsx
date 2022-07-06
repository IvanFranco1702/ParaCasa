import React from 'react'
import { useContext } from 'react'
import {useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const LogginPages = () => {
  const navigate = useNavigate()
  const {onLogin}= useContext(AuthContext)

  const onLoggin =()=>{
    const ultimoPath = localStorage.getItem('ultimoPath')|| '/'

    onLogin('Hernesto Quispe');
    navigate(ultimoPath,{
      replace:true

    })
  }
  return (  
    <div>
      <h1>loggin page</h1>
      <hr />
      <button onClick={onLoggin}>login</button>

    </div>
  )
}
