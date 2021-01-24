import { createDeepEqualSelector, RootState } from '../index'
// types
import { EReduxKeys } from '../../../shared/constants/redux'
import { TCurrentUserStoreData } from './types'

export const currentUserDataSelector = createDeepEqualSelector(
  (state: RootState) => state[EReduxKeys.CURRENT_USER] as TCurrentUserStoreData,
  (currentUserData) => currentUserData
)
