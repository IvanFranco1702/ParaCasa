const express= require ('express')
const { dbConection } = require('./database/config')
require('dotenv').config()


//crear el servidor de express 
const app = express()

//base de datos 
dbConection()

// Directorio Publico

app.use(express.static('public'))//el use es un midelware


app.use(express.json())


//Rutas 
app.use('/api/auth',require('./routes/auth'))


//escuchar peticiones 
app.listen(process.env.PORT,()=>{
    console.log('servidor corriendo')
})