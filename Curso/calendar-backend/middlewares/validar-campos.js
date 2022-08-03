const express = require('express')
const { validationResult } = require('express-validator')
const response = express.response
// const {response} = require('express') esta es otra forma de llamar al response 



const validarCampos =(req,res=response,next )=>{

    
    const errors=validationResult(req) 
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false, 
            errores: errors.mapped()
        })
    }

    next()
}


module.exports= { 
    validarCampos
}