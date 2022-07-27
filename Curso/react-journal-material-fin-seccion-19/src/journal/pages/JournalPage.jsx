import { IconButton } from '@mui/material';
import { AddOutlined, DisabledByDefault } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { useDispatch, useSelector } from 'react-redux';
import { startNuevaNota } from '../../store/journal/thunks';

export const JournalPage = () => {
  const {isSaving,active} = useSelector(state=>state.journal)
  const dispatch = useDispatch()

  const onClickNuevaNota= ()=>{
    dispatch(startNuevaNota())
  }
  const actve=()=>{ if(active){
    return(
    <NoteView />)
  }else{
    return(
    <NothingSelectedView />)
  }}
  return (

    
    <JournalLayout>
      {
      actve()
    }
      {/* <Typography>Sint id officia amet velit do aliqua aliqua est ea velit minim voluptate duis laboris. Esse esse consectetur ullamco excepteur ullamco amet. Mollit est nostrud nisi irure magna dolor eiusmod aliquip aliqua nostrud incididunt enim. Velit ipsum laborum Lorem anim laboris aute ullamco ipsum do adipisicing irure.</Typography> */}

      
      {/* <NoteView /> */}


      <IconButton
      disabled= {isSaving}
      onClick={onClickNuevaNota}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
