import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logInReducer from './features/LogIn/Log_in_slice'
import productsReducer from './features/Products/ProductsSlice'


const RootReducer = combineReducers({
  logged:logInReducer,
  products:productsReducer,

})

export const store = configureStore({
    reducer: RootReducer
  })
