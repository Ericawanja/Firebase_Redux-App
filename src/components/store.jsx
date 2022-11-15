import { configureStore } from '@reduxjs/toolkit'
import logInReducer, { LogInSlice } from './features/LogIn/Log_in_slice'

export const store = configureStore({
    reducer: {
      logged:logInReducer
    },
  })
