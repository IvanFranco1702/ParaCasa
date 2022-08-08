const {response} = require('express')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const { generar } = require('../helpers/jwt')
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

            //JWT 
            const token = await generar(usuario.id,usuario.name)

            res.status(201).json({
                ok:true, 
                uid:usuario.id,
                name:usuario.name,
                token
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
            //JWT 
            const token = await generar(usuario.id,usuario.name)

        res.json({   
                ok:true,
                msg:'login',
                uid: usuario.id, 
                name: usuario.name,
                token
        
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
const revalidarUsuario= async (req,res=response)=>{

   const {uid, name} = req

    const token = await generar(uid,name)


    res.json({
        ok:true,
        token,
        uid,
        name
    })
    // console.log('se requiere /')
  
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarUsuario

}