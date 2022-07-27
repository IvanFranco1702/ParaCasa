import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const Calendar = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </Provider>
    
  )
}
