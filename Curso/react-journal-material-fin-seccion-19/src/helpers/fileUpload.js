// import { Cloud } from "@mui/icons-material"

export const fileUpload=async(file)=>{
    if(!file)throw new Error('no tenemos ningun archivo a subir')
    const url = 'https://api.cloudinary.com/v1_1/dxtsvjxgk/upload'

    const formData= new FormData()
    formData.append('upload_preset','react-journal')
    formData.append('file', file)


    try{
        const resp = await fetch(url,{
            method:'POST',
            body: formData
        })
        if(!resp.ok) throw new Error(' no se pudo subir ')
        const cloudResp = await resp.json()
        return cloudResp.secure_url

    } catch (error){
        console.log(error)
        throw new Error(error.message)
    }

}