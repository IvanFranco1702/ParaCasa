import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { cargandoNotas } from "../../helpers"
import { actualizarNotas, cargaNotas, crearNuevaNota, guardandoNuevaNota, guardarNotas, notaActiva } from "./journalSlice"

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
export const startGuardarLaNota = ()=>{
    return async(dispatch, getState)=>{
        dispatch(guardarNotas())
        const {uid} = getState().auth
        const {active} = getState().journal
        const notaParaFirestore={...active}
        delete notaParaFirestore.id; 
        const docRef = doc(FirebaseDB, `${uid}/journal/notas/${active.id}`)
         await setDoc(docRef,notaParaFirestore, {merge:true})


         dispatch(actualizarNotas(active))
    }

}