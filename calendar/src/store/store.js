import {configureStore} from '@reduxjs/toolkit'
import {uiSlice} from '../store/ui/uiSlice'

export const store = configureStore({
    reducer:{
        ui:uiSlice.reducer
    }
}) 