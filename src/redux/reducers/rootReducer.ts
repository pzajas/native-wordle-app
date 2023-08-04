import { combineReducers } from 'redux'
import themeSliceReducer from '../features/themeSlice'
import stringsReducer from '../features/stringsSlice'
import numbersReducer from '../features/numbersSlice'
import booleanReducer from '../features/booleanSlice'

const rootReducer = combineReducers({
  strings: stringsReducer,
  numbers: numbersReducer,
  boolean: booleanReducer,
  theme: themeSliceReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
