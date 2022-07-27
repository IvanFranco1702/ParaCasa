import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (

  
    <> 
    <AuthProvider>

    <h1>HeroesApp</h1>
    <AppRouter></AppRouter>

    </AuthProvider>

    </>
    
  )
}
