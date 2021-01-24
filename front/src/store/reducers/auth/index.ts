// constants
import { createSlice } from '@reduxjs/toolkit'
import { authReducers } from './reducers'

const initialState: any = {
  token: '',
}

const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: authReducers,
})

export const { setAuthData, updateAuthData } = authSlice.actions

export default authSlice.reducer
