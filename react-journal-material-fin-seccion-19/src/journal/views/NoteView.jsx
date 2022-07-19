import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography, useFormControl } from '@mui/material';
import { ImageGallery } from '../components'
import {useForm}from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { notaActiva } from '../../store/journal/journalSlice';
import { startGuardarLaNota } from '../../store/journal/thunks';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { useRef } from 'react';
import { startActualizandoArchivos } from '../../store/auth';

export const NoteView = () => {
    const dispatch = useDispatch()
    const {active,SaveMessage,isSaving}=useSelector(state=>state.journal)
    const{body, title,date, onInputChange, formState} =useForm(active)
    const  dia = useMemo(()=>{
        const newDate= new Date(date)
        return newDate.toUTCString()
    },[date])


    useEffect(() => {
      dispatch(notaActiva(formState))
    }, [formState])
    

    const guardarLaNota=()=>{
        if(title.length>0){dispatch(startGuardarLaNota())}
        
    }
    const onFileImputChange=({target})=>{

        if(target.files==0)return 
        dispatch(startActualizandoArchivos(target.files))
    }
    const fileInputRef =useRef()

        useEffect(() => {
        if(SaveMessage.length>0){
            Swal.fire('Nota Actualizada',SaveMessage, 'exitoso')
        }


        }, [SaveMessage])
    
  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{dia}</Typography>
        </Grid>
        <Grid item>

         <input type="file" 
         multiple 
         ref={fileInputRef} 
         onChange={onFileImputChange} 
         style={{display:'none'}}/>

        <IconButton  onClick={()=>fileInputRef.current.click()}
       >
            <UploadOutlined></UploadOutlined>
        </IconButton>

            

            <Button color="primary" sx={{ padding: 2 }}
            onClick={guardarLaNota}
            >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name='title'
                value={title}
                onChange={onInputChange}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                name='body'
                value={body}
                onChange={onInputChange}
            />
        </Grid>

        {/* Image gallery */}
        <ImageGallery />

    </Grid>
  )
}
