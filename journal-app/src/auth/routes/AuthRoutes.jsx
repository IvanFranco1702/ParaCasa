import React from 'react'
import {Navigate,Route, Routes} from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
export const AuthRoutes = () => {
  return (
    <Routes>
        
        <Route path='/*'  element={<Navigate to='/auth/login'></Navigate>}></Route>
        <Route path='register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='login' element={<LoginPage></LoginPage>}></Route>
    </Routes>
  )
}
