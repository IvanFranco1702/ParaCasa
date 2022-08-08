import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { getEnvVariables } from '../helpers';
import { useAthStore } from '../hooks';


export const AppRouter = () => {
const {status,checkAuthToken}= useAthStore()

useEffect(() => {
  checkAuthToken()
}, [])


if(status === 'checking'){
    return(
        <h3>cargando</h3>
    )
}

    // const authStatus = 'not-authenticated';
     // 'authenticated'; // 'not-authenticated';
    console.log(getEnvVariables())

    return (
        <Routes>
            {
                ( status === 'not-authenticated')  
                    ? (<>
                        <Route path="/auth/*" element={ <LoginPage /> } />
                        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                    </>)
                    : (
                    <>
                        <Route path="/" element={ <CalendarPage /> } />
                        <Route path="/*" element={ <Navigate to="/" /> } />

                    </>
                    )
            }

            
        </Routes>
    )
}
