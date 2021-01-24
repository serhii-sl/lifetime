import { combineReducers } from '@reduxjs/toolkit'
// reducers
import { reducer as form } from 'redux-form'
import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'lodash/isEqual'
import auth from './auth'

const rootReducer = combineReducers({
  form,
  AUTH: auth as any,
})

export type RootState = ReturnType<typeof rootReducer>

// create a "selector creator" that uses lodash.isEqual instead of ===
export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
)

export default rootReducer
