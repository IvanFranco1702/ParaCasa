const {response} = require('express')
const {validationResult} = require('express-validator')

const crearUsuario=(req,res=response)=>{ 
       const {name,email,contraseña} = req.body   

    const errors=validationResult(req) 
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false, 
            errores: errors.mapped()
        })
    }
    res.status(201).json({
        ok:true, 
        msg:'registro',
        name,
        email,
        contraseña
    })
    // console.log('se requiere /')
  
}

const loginUsuario=(req,res=response)=>{

    const errors=validationResult(req) 
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false, 
            errores: errors.mapped()
        })}
    const {name,email,contraseña} = req.body   

    res.json({
        ok:true,
        msg:'login',
        email, 
        contraseña,

    })
    // console.log('se requiere /')
  
}
const revalidarUsuario=(req,res=response)=>{
    res.json({
        ok:true,
        msg: 'renew'
    })
    // console.log('se requiere /')
  
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarUsuario

}