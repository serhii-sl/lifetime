import { PayloadAction } from '@reduxjs/toolkit'

export const authReducers = {
  setAuthData: (state: any, { payload }: any) => ({
    ...state,
    ...payload,
  }),
  updateAuthData: (state: any, { payload }: any) => ({
    ...state,
    ...payload,
  }),
}
