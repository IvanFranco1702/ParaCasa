import { createSlice } from '@reduxjs/toolkit'
export const holaSlice = createSlice({
  name: 'name',
initialState:{
counter:10
},
  reducers: {
increment: (state) => {  
state.value += 1
},
  },
})
export const { increment, } = holaSlice.actions