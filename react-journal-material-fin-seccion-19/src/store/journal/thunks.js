import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { crearNuevaNota, guardandoNuevaNota, guardarNotas, notaActiva } from "./journalSlice"

export const startNuevaNota =()=>{
    return async(dispatch, getState)=>{
        const {uid}=getState().auth
        console.log(getState())


        const nuevaNota={
            title:'',
            body:'',
            date: new Date().getTime(),
        }

        const nuevoDocumento = doc(collection(FirebaseDB ,`${uid}/journal/notas`))
        await setDoc(nuevoDocumento,nuevaNota)
        nuevaNota.id = nuevoDocumento.id
        
        dispatch(crearNuevaNota(nuevaNota))
        dispatch(notaActiva(nuevaNota))
        dispatch(guardandoNuevaNota())
    }
}