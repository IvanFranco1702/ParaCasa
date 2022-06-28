import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../interfasGrafica'
import { LogginPages } from '../auth/pages/LogginPages'
import { DCPages } from '../heroes/pages/DCPages'
import { MarvelPages } from '../heroes/pages/MarvelPages'

export const AppRouter = () => {
  return (
    <>
    <Navbar></Navbar>
        <Routes>
            <Route path="Marvel" element={<MarvelPages />} />
            <Route path="Dc" element={<DCPages />} />
            <Route path="Loggin" element={<LogginPages />} />     
            <Route path="/" element={<Navigate to='/marvel'/>} />   
            </Routes>

    </>
  )
}
