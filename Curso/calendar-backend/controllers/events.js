const { response } = require("express")

const Evento = require('../models/Evento')


const getEventos =async(req, res= response)=>{
    
    const eventos = await Evento.find()
                                .populate('user','name')
    res.json({
        ok:true,
        evento:eventos
    })

}

const crearEventos =async(req, res= response)=>{

    const evento = new Evento(req.body)

    try{

        evento.user= req.uid

        await evento.save()
        res.json({
            ok:true, 
            evento: evento
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'hable con el administrador'
        })
    }

  
}

const actualizarEventos =async(req, res= response)=>{


    const eventoid = req.params.id;
    const uid = req.uid

    try {
        
        const evento =await Evento.findById(eventoid)
        if(!evento){
            return res.status(404).json({
                ok:false, 
                msg:'evento no existe por ese id'
            })
        }
        if (evento.user.toString()!==uid){
            res.status(401).json({
                ok:false,
                msg:'no tiene privilegio para editar esto'
            })
        }
        const nuevoEvento={
            ...req.body ,
            user: uid
        }
        const eventoactualizado = await Evento.findByIdAndUpdate(eventoid,nuevoEvento,{new: true})

        res.json({
                ok:true,
                evento: eventoactualizado
                })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            
            ok: false, 
            msg:'no hay id'
        })
        
    }

    

}

const borrarEventos =async(req, res= response)=>{

    const eventoid = req.params.id;
    const uid = req.uid

    try {
        
        const evento =await Evento.findById(eventoid)
        if(!evento){
          return  res.status(404).json({
                ok:false, 
                msg:'evento no existe por ese id'
            })
        }
        if (evento.user.toString()!==uid){
            res.status(401).json({
                ok:false,
                msg:'no tiene privilegio para borrar esto esto'
            })
        }
     
        await Evento.findByIdAndDelete(eventoid)

        res.json({
                ok:true,
                })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            
            ok: false, 
            msg:'no hay id'
        })
        
    }

    
}



module.exports={
    getEventos,
crearEventos,
actualizarEventos,
borrarEventos,
}