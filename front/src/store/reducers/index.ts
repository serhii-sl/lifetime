// libs
import { combineReducers } from '@reduxjs/toolkit'
import { createSelectorCreator, defaultMemoize } from 'reselect'
// reducers
import { reducer as form } from 'redux-form'
import currentUserReducer from './currentUser'
// constants
import { EReduxKeys } from '../../shared/constants/redux'
// utils
import isEqual from 'lodash/isEqual'

const rootReducer = combineReducers({
  form,
  [EReduxKeys.CURRENT_USER]: currentUserReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
)

export default rootReducer
