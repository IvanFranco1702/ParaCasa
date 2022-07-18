import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { cargandoNotas } from "../../helpers"
import { cargaNotas, crearNuevaNota, guardandoNuevaNota, guardarNotas, notaActiva } from "./journalSlice"

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
export const startCargarNuevaNota =()=>{
    return async(dispatch,getState)=>{
        
        const {uid}=getState().auth
        console.log({uid})

       const notas = await cargandoNotas(uid)
        dispatch(cargaNotas(notas))
    }

}