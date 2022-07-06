import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Navbar } from '../interfasGrafica'
import { LogginPages } from '../auth'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRout } from './PublicRout'
export const AppRouter = () => {
  return (
    <>
    
    <Navbar></Navbar>
        <Routes>

          <Route path='Loggin' element={
            <PublicRout>
              <LogginPages />
            </PublicRout>

          }></Route>
            {/* <Route path="Loggin" element={<LogginPages />} />      */}
            {/* <Route path="/*" element={<HeroesRoutes/>} /> */}
            <Route path='/*' element={<PrivateRoute>
              <HeroesRoutes/>
            </PrivateRoute>}></Route>
            </Routes>

    </>
  )
}
