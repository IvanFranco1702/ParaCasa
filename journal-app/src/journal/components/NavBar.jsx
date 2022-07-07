import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import {LogoutOutlined, MenuOutlined} from '@mui/icons-material'
import React from 'react'

export const NavBar = ({drawerWidth}) => {
  return (
    <AppBar position='fixed'
    sx={{ 
        width:{sm:`calc(100% -${drawerWidth}px)`},
        ml:{sm:`${drawerWidth}px`}
    }}
   >
        <Toolbar>
            <IconButton
            color='inherit'
            edge='start'
            sx={{mr:2,display:{sm:'none'}}}>
                <MenuOutlined></MenuOutlined>
            </IconButton>
            <Grid conteiner direccion='row' justifyContent='space-between' alingItems='center'>
            <Typography variant='h6' noWrap component='div' >Journal app</Typography>

            <IconButton color='error'>
                <LogoutOutlined></LogoutOutlined>
            </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
