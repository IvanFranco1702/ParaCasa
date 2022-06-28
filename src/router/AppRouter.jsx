import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Navbar } from '../interfasGrafica'
import { LogginPages } from '../auth'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
export const AppRouter = () => {
  return (
    <>
    
    <Navbar></Navbar>
        <Routes>
            <Route path="Loggin" element={<LogginPages />} />     
            <Route path="/*" element={<HeroesRoutes/>} />
          
            </Routes>

    </>
  )
}
