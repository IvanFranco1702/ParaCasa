import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import { LoginPage } from '../auth'
import { CalendarPage } from '../calendar/pages/CalendarPage'
export const AppRouter = () => {

     const authStatus = 'verificado'
  return (
    
    <Routes>
        
     
        
            {
                (authStatus === 'no verificado')
                ?<Route path='/auth/*' element={<LoginPage></LoginPage>}></Route>
                :<Route path='/*' element={<CalendarPage></CalendarPage>}></Route>
            }
        <Route path='/*' element={<Navigate to='/auth/login'></Navigate>}></Route>

    </Routes>

  )
}
