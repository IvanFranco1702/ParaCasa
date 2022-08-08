const jwt = require('jsonwebtoken')



const generar =(uid , name)=>{


    return new Promise((resolve, reject)=>{
        const payload= {uid, name}
        jwt.sign(payload, process.env.SECRETO,{
            expiresIn: '2h'
        },(err,token)=>{
            if(err){
                console.log()
                reject('no se pudo generar el token')
            }
            resolve(token)

        })
    })

}


module.exports={
    generar
}