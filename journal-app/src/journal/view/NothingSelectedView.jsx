import { StarOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight:'calc(100vh - 100px)', backgroundColor:'primary.main', borderRadius:3}}
    >
        <Grid item xs={12}>
            <StarOutlined sx={{fontSize:100, color:'white'}}></StarOutlined>
        </Grid>
        <Grid item xs={12}>
            <Typography color='white' veriant='h5'> QUE PASA PAAAAAAAA </Typography>
        </Grid>
  </Grid>
    )
}
