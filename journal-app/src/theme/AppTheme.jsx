// import React from 'react'
import {ThemeProvider} from '@emotion/react'
import {CssBaseline} from '@mui/material'
import { color } from './color'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={color}>
        <CssBaseline></CssBaseline>
    {children}
    </ThemeProvider>
  )
}
