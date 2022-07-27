import { collection, getDoc, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const cargandoNotas= async(uid='')=>{

    const coleccionRef = collection(FirebaseDB,`${uid}/journal/notas`)
    const docs = await getDocs(coleccionRef)

    const notas=[];

    docs.forEach(doc=>{
        notas.push({id:doc.id, ...doc.data()})
    })
    console.log(notas)
    return notas
    
}