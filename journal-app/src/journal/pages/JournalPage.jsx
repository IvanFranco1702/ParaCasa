import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
// import {MailOutline} from '@mui/icons-material'
// import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../view'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NoteView></NoteView> */}
      {/* <Typography variant='h1'>hola</Typography> */}
      <NothingSelectedView></NothingSelectedView>
      <IconButton
      size='large'
      sx={{
        color:'white',
        backgroundColor: 'error.main',
        ':hover':{backgroundColor:'error.main',opacity:0.9},
        position:'fixed', 
        right:50,
        bottom:50

      }}>
          <AddOutlined sx={{fontSize:30}}></AddOutlined>
      </IconButton>
    </JournalLayout>
    

  )
}
