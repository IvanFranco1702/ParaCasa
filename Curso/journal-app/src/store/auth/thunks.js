// import { useDispatch, useSelector } from 'react-redux'
import { registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'



    

export const checkingAuthenticartion = (email,password) => {
  return async(dispatch)=>{
    dispatch(checkingCredentials())

  }
}

export const startGoogle = () => {
    return async(dispatch)=>{
      dispatch(checkingCredentials())
      const result = await singInWithGoogle()
      if(!result.ok===true) dispatch(logout(result.errorMessage))
    //   console.log({result})
      dispatch(login(result))
  
    }
  }


export const screateUserWithEmailAndPassword = ({ email,password, displayName})=>{
  return async(dispatch)=>{

    dispatch(checkingCredentials())

    const {ok, uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email,password, displayName})
    

    if(!ok) return dispatch(logout({errorMessage})) 
    console.log({ email,password, displayName})
    dispatch(login(uid,photoURL,displayName,email))
  }
    
}
