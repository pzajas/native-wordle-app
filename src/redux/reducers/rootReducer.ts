import { combineReducers } from 'redux'
import winsCounterReducer from '../features/winCounterSlice'
import losesCounterReducer from '../features/loseCounterSlice'
import winsInRowCounterReducer from '../features/winsInRowSlice'
import winsInTryCounterReducer from '../features/winsInTrySlice'
import themeSliceReducer from '../features/themeSlice'
import stringsReducer from '../features/stringsSlice'
import numbersReducer from '../features/numbersSlice'
import booleanReducer from '../features/booleanSlice'

const rootReducer = combineReducers({
  wins: winsCounterReducer,
  loses: losesCounterReducer,
  winsInRow: winsInRowCounterReducer,
  winsInTry: winsInTryCounterReducer,
  theme: themeSliceReducer,
  strings: stringsReducer,
  numbers: numbersReducer,
  boolean: booleanReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
