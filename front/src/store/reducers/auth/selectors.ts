import { createDeepEqualSelector, RootState } from '../index'
// types

export const authDataSelector = createDeepEqualSelector(
  (state: RootState) => state['AUTH'] as any,
  (authData) => authData
)
