const crearUsuario=(req,res)=>{
    res.json({
        ok:true, 
        msg:'registro'
    })
    // console.log('se requiere /')
  
}

const loginUsuario=(req,res)=>{
    res.json({
        ok:true,
        msg:'login'
    })
    // console.log('se requiere /')
  
}
const revalidarUsuario=(req,res)=>{
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