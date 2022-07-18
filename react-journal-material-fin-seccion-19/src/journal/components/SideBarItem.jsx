import React from 'react'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Note, TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const SideBarItem = ({title= '' , body , id}) => {
    const newTitle= useMemo(()=>{
        return title.length>17 ? title.substring(0,17)+'...': title;
    },[title])
  return (
<ListItem  disablePadding>
    <ListItemButton>
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
