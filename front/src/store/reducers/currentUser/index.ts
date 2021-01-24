// reducers
import { currentUserReducers } from './reducers'
// constants
import { createSlice } from '@reduxjs/toolkit'
import { EReduxKeys } from '../../../shared/constants/redux'
// types
import { TCurrentUserStoreData } from './types'

const initialState: TCurrentUserStoreData = {
  user: null,
  isAuth: false,
  loading: true,
}

const currentUserSlice = createSlice({
  name: EReduxKeys.CURRENT_USER,
  initialState,
  reducers: currentUserReducers,
})

export const {
  setCurrentUserData,
  updateCurrentUserData,
  setIsLoading,
} = currentUserSlice.actions

export default currentUserSlice.reducer
