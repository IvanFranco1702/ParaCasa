import {Link as RouterLink} from 'react-router-dom'
// import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography,Link} from '@mui/material'
import { AuthLeyout } from '../layout/AuthLeyout'
import { useForm } from '../../hooks/useForm'

export const RegisterPage = () => {
  



  const formData = {
    email:'email@gmail.com',
    password: 12345,
    displayName: ''
  }  
  const formValidation ={
    email: [(value) => value.includes('@'), ' el email debe tener un @'],
    password:  [(value) => value.length>=5,'el campo debe ser completado con al menos 5 caracteres' ],
    displayName:  [(value) => value.length >=3,'el campo debe ser completado con al menos 3 caracteres']
  }
  
  const {formState,onInputChange, onResetForm,email,password, displayName, 
    formValid,emailValid,PaswordValid,displayNameValid} =useForm(formData,formValidation)
    
    console.log(displayNameValid)
  onsubmit=(e)=>{
    e.preventDefault()
    console.log(formState)

  }

  return (
    <AuthLeyout title='crear cuenta'>
            <form onSubmit={onsubmit}>
        <Grid conteiner sx={{mb:2}}>

          <Grid item xs={12} sx={{p:1}}>
            <TextField
            
            label='Nombre Completo'
            type='text'
            placeholder='Escribe tu nombre'
            fullWidth
            value={displayName}
            onChange={onInputChange}
            name='displayName'>
            </TextField>
          </Grid>

          <Grid item xs={12} sx={{p:1}}>
            <TextField
            label='Correo'
            type='email'
            placeholder='email@google.com'
            fullWidth
            value={email}
            onChange={onInputChange}
            name='email'></TextField>
          </Grid>

          <Grid item xs={12} sx={{p:1}}>
            <TextField
            label='contraseña'
            type='password'
            placeholder='contraseña'
            fullWidth
            value={password}
            onChange={onInputChange}
            name='password'></TextField>
          </Grid>

        </Grid>
        <Grid conetiner sapcing={2} sx={{mb:2}}>

          <Grid item xs={12} sm={12} sx={{mb:1}}>
            <Button type='submit' variant='contained' fullWidth >
              Crear 
            </Button>
          </Grid>

          <Grid conteiner direction='row' justifyContent='end'>
            <Typography sx={{mr:1}}>¿Ya estas registrado?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
            ingresar
            </Link>
            
          </Grid>

        </Grid>



      </form>
    </AuthLeyout>


    )
}
