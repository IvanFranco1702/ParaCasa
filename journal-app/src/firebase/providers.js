import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { FirebaseAuth } from './config'

const googlePorvider= new GoogleAuthProvider()


 export const singInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googlePorvider)
        // const credential =  GoogleAuthProvider.credentialFromResult(result)
        const {displayName,email, photoURL, uid} = result.user
        return {
            ok: true,
            displayName,email, photoURL, uid
        }

    }
    catch(error){
        console.log(error)
        const mensajeError = error.message
        return {
            ok: false ,
            mensajeError
        }
    }
}