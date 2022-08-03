const mongoose  = require("mongoose");


const dbConection= async()=>{
    try{
        mongoose.connect(process.env.DB_CONECTION);
        console.log('db online ')
    }catch(error){
        console.log(error)
        throw new Error('Error a la hora de inicializar la base de datos')
    }
}

module.exports={
dbConection
}