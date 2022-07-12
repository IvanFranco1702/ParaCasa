import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography,Link} from '@mui/material'
import { AuthLeyout } from '../layout/AuthLeyout'
import { useForm } from '../../hooks'
import {useDispatch} from 'react-redux'
import { checkingAuthenticartion, startGoogle } from '../../store/auth/thunks'

export const LoginPage = () => {

 const dispatch =  useDispatch()
  const {formState,onInputChange, onResetForm,email,password} =useForm({
    email:'ivanfrancoarg@gmail.com',
    password: 123123
  })

  const onSubmit = (event)=>{
    event.preventDefault()
    console.log({email,password})
    dispatch(checkingAuthenticartion())
  }
  const onGoogle = ()=>{
    console.log('gooooglleeee')
    dispatch(startGoogle())
  }

  return (
    <AuthLeyout title='Inicio'>
            <form onSubmit={onSubmit}>
        <Grid conteiner sx={{mb:2}}>

          <Grid item xs={12} sx={{p:1}}>
            <TextField
            label='correo'
            type='email'
            placeholder='correo@gmail.com'
            fullWidth
            name='email'
            value={email}
            onChange={onInputChange}></TextField>
          </Grid>

          <Grid item xs={12} sx={{p:1}}>
            <TextField
            label='contraseña'
            type='password'
            placeholder='contraseña'
            fullWidth
            name='contraseña'
            value={password}
            onChange={onInputChange}></TextField>
          </Grid>

         

        </Grid>
        <Grid conteiner sapcing={2} sx={{mb:2}}>

          <Grid item xs={12} sm={12} sx={{mb:1}}>
            <Button type='submit' variant='contained' fullWidth >
              Login
            </Button>
          </Grid>

          <Grid item xs={12 } sm={12} >
            <Button onClick={onGoogle}  variant='contained' fullWidth >
              <Google></Google>
              <Typography sx={{ml:1}}>GOOGLE</Typography>
            </Button>
          </Grid>

          <Grid conteiner direction='row' justifyContent='end'>
            
            <Link component={RouterLink} color='inherit' to='/auth/register'>
            Crear una cuenta
            </Link>
            
          </Grid>

        </Grid>



      </form>
    </AuthLeyout>


    )
}
