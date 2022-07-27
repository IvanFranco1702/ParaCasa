import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { Navbar } from '../../interfasGrafica'
import { DCPages, MarvelPages,Heroe,Serch} from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'
export const HeroesRoutes = () => {
  return (
  <>
    <div className="container">
        <Routes>
            <Route path="/serch" element={<Serch />} />
            <Route path="/heroe/:id" element={<Heroe />} />
            <Route path="Marvel" element={<MarvelPages />} />
            <Route path="Dc" element={<DCPages />} />
            <Route path="/" element={<Navigate to='/marvel'/>} />       
        </Routes>
    </div>

   
  </>
  )
}
