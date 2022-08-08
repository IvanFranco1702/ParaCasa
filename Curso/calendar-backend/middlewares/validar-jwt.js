const { response } = require("express")
const jwt = require('jsonwebtoken')

const validarJWT= (req, res=response, next)=>{

    const token= req.header('x-token')

    if(!token){
        return res.status(401).json({
            ok: false,
            msg:'no hay token de peticion'
        })
    }

    try {
        const {uid, name} = jwt.verify(
            token, 
            process.env.SECRETO
        )
        req.uid = uid; 
        req.name = name
        
    } catch (error) {
        res.status(401).json({
            ok:false, 
            msg:'token no valido'
        })
    }
    
    // console.log(token)
    next()

}   

module.exports={
    validarJWT
}