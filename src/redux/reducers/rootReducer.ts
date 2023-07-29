import { combineReducers } from 'redux'
import winsCounterReducer from '../features/winCounterSlice'
import losesCounterReducer from '../features/loseCounterSlice'
import winsInRowCounterReducer from '../features/winsInRowSlice'
import winsInTryCounterReducer from '../features/winsInTrySlice'
import themeSlice from '../features/theme/themeSlice'

const rootReducer = combineReducers({
  wins: winsCounterReducer,
  loses: losesCounterReducer,
  winsInRow: winsInRowCounterReducer,
  winsInTry: winsInTryCounterReducer,
  theme: themeSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
