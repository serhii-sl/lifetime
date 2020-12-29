// libs
import { configureStore } from '@reduxjs/toolkit'
// reducer
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export default store
