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

//Loggin

const loginUsuario=async(req,res=response)=>{    

    const {name,email,contraseña} = req.body   

    //confirmacion de email
    try {

        let usuario = await Usuario.findOne({
            email
        })
        // console.log(ususario)
        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg: ' el mail o la contraseña son incorrectos'
            })
        } 
        
        const comparacionContraseñas = bcrypt.compareSync(contraseña,usuario.contraseña)

        if(!comparacionContraseñas){
            return res.status(400).json({
                ok:false,
                msg:'contraseña incorrecta'
            })
        }

        res.json({   
                ok:true,
                msg:'login',
                uid: usuario.id, 
                name: usuario.name,
        
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'hbale con el administrador'
        })
        
    }

    // consfirmacion de la contraseña
   
    
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