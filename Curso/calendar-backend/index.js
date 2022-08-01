const express= require ('express')
require('dotenv').config()
console.log(process.env)

//crear el servidor de express 
const app = express()

// Directorio Publico

app.use(express.static('public'))//el use es un midelware
// app.get('/',(req,res)=>{
    
//     // console.log('se requiere /')
  
// })

//Rutas 


//escuchar peticiones 
app.listen(process.env,()=>{
    console.log('servidor corriendo')
})