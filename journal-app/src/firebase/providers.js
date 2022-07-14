import {GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword} from 'firebase/auth'

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

export const registerUserWithEmailPassword= async({password,displayName})=>{

    try{
        console.log({password,displayName})

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, password)
        const {uid, photoURL}= resp.user
        console.log(resp)
    }
    catch(error){
        console.log(error);
        return {ok: false, errorMessage:error.message}
    }

}