import { combineReducers } from '@reduxjs/toolkit'
// reducers
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  form,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
