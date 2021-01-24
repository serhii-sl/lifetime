// types
import { PayloadAction } from '@reduxjs/toolkit'
import { TCurrentUserStoreData } from './types'

export const currentUserReducers = {
  setCurrentUserData: (
    state: TCurrentUserStoreData,
    { payload }: PayloadAction<TCurrentUserStoreData>
  ) => ({
    ...state,
    ...payload,
  }),
  updateCurrentUserData: (
    state: TCurrentUserStoreData,
    { payload }: PayloadAction<Partial<TCurrentUserStoreData>>
  ) => ({ ...state, ...payload }),
  setIsLoading: (
    state: TCurrentUserStoreData,
    { payload }: PayloadAction<TCurrentUserStoreData['loading']>
  ) => ({ ...state, loading: payload }),
}
