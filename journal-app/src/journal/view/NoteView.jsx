import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Galeria } from '../components/Galeria'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}} >
        <Grid item>
            <Typography fontSize={39} fontWeight='ligth'> 3 de enero de 2020</Typography>
        </Grid>

        <Grid item >
            <Button color='primary' sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:30, mr:1}}></SaveOutlined>
                GUARDAR
            </Button>

        </Grid>

        <Grid container>

            <TextField type='text'
            variant='filled'
            fullWidth
            placeholder='ingrese titulo'
            label='Titulo'
            sx={{border:'none', mb:1}}
            ></TextField>

        
             <TextField type='text'
            variant='filled'
            fullWidth
            multiline
            placeholder='que paso hoy '
            minRows={5}
            ></TextField>

        </Grid>    
        {/* galeria de imagenes */}
        <Galeria></Galeria>
    </Grid>

)
}
