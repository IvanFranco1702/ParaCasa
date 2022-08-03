const {response} = require('express')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
// const {validationResult} = require('express-validator')


const crearUsuario= async(req,res=response)=>{ 
    const {name,email,contraseña} = req.body  

    try{

        let usuario = await Usuario.findOne({
            email
        })
        // console.log(ususario)
        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: ' este mail ya esta registrado'
            })
        }
         usuario = new Usuario(req.body)
        
        //encriptar la contraseña 
        const salt = bcrypt.genSaltSync()
        usuario.contraseña= bcrypt.hashSync(contraseña,salt)

            await usuario.save();
            
            res.status(201).json({
                ok:true, 
                uid:usuario.id,
                name:usuario.name
            })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            ok:false,
            msg:'tenes un error flaco no tenemos con quien presentar quejas '
        })
    }
    
    // console.log('se requiere /')
  
}

const loginUsuario=(req,res=response)=>{

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