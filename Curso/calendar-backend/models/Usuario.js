const {  Schema, model } = require("mongoose");


const usuarioSchema= Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true 

    }, 
    contraseña: {
        type:String,
        required:true

    }


})
module.exports= model('Usuario', usuarioSchema)
