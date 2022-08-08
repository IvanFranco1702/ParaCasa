import {useDispatch,useSelector} from 'react-redux'
import { calendarApi } from '../api'
import { clean, onChecking, onLogin, onLogout } from '../store/auth/authSlice'


export const useAthStore = () => {
    const {status,user,errorMessage} = useSelector(state =>state.auth) 
    const dispatch=  useDispatch()

    const startLogin = async({email,contraseña})=>{
        console.log({email,contraseña})

        dispatch(onChecking())

        try {
            
            const {data} = await calendarApi.post('/auth',{email,contraseña})
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({name:data.name,uid:data.uid}))

            
        } catch (error) {
            dispatch(onLogout('escribi bien forro'))            
            setTimeout(()=>{
                dispatch(clean())
            },10)
        }
    }






     const startRegister = async({email,contraseña,name})=>{
        console.log({email,contraseña})

        dispatch(onChecking())

        try {
            
            const {data} = await calendarApi.post('/auth/new',{email,contraseña,name})
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({name:data.name, uid:data.uid}))

            
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg||'._.'))            
            setTimeout(()=>{
                dispatch(clean())
            },10)
        }
    }


    const checkAuthToken= async()=>{
        const token = localStorage.getItem('token')
        if (!token)return dispatch(onLogout())
        try {
            const {data}= await calendarApi.get('auth/renew')
            localStorage.setItem('token', data.token )
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({name:data.name, uid:data.uid}))
            
        } catch (error) {
            localStorage.clear()
            dispatch(onLogout())
        }
    }
    const startLogout=()=>{
        localStorage.clear();
        dispatch(onLogout())
        console.log('hola esto funciona como el culo ')
    }

  return{
    status,
    user,
    errorMessage,
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  }
}
