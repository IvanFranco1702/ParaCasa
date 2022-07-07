import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography,Link} from '@mui/material'
import { AuthLeyout } from '../layout/AuthLeyout'

export const RegisterPage = () => {
  return (
    <AuthLeyout title='crear cuenta'>
            <form >
        <Grid conteiner sx={{mb:2}}>

          <Grid item xs={12} sx={{p:1}}>
            <TextField
            label='Nombre Completo '
            type='text'
            placeholder='Escribe tu nombre'
            fullWidth></TextField>
          </Grid>

          <Grid item xs={12} sx={{p:1}}>
            <TextField
            label='Correo'
            type='email'
            placeholder='email@google.com'
            fullWidth></TextField>
          </Grid>

          <Grid item xs={12} sx={{p:1}}>
            <TextField
            label='contraseña'
            type='password'
            placeholder='contraseña'
            fullWidth></TextField>
          </Grid>

        </Grid>
        <Grid conetiner sapcing={2} sx={{mb:2}}>

          <Grid item xs={12} sm={12} sx={{mb:1}}>
            <Button variant='contained' fullWidth >
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
