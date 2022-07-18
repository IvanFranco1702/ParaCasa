import React from 'react'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Note, TurnedInNot } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { notaActiva } from '../../store/journal/journalSlice';

export const SideBarItem = ({title= '' , body , id, date,imageUrls=[]}) => {

    const dispatch = useDispatch()
    const clickNota=()=>{
        dispatch(notaActiva({title , body , id, date,imageUrls}))  
    }

    const newTitle= useMemo(()=>{
        return title.length>17 ? title.substring(0,17)+'...': title;
    },[title])
  return (
<ListItem  disablePadding >
    <ListItemButton onClick={clickNota}>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={  newTitle} />
            <ListItemText secondary={ body } />
        </Grid>
    </ListItemButton>
</ListItem>
    )
}
