import React from 'react'
import {useNavigate } from 'react-router-dom'

export const LogginPages = () => {
  const navigate = useNavigate()
  const onLoggin =()=>{
    navigate('/',{
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
