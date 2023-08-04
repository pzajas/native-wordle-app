import { createSlice } from '@reduxjs/toolkit'

export interface INumbers {
  chanceCounter: number
  resetKey: number
  wins: number
  loses: number
  winsInRow: number
  winsInTry: number[]
}

const initialState: INumbers = {
  chanceCounter: 1,
  resetKey: 0,
  wins: 0,
  loses: 0,
  winsInRow: 0,
  winsInTry: [],
}

const slice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    setChanceCounter: (state, action) => {
      state.chanceCounter = action.payload
    },
    resetChanceCounter: (state) => {
      state.chanceCounter = initialState.chanceCounter
    },
    setResetKey: (state) => {
      state.resetKey += 1
    },
    incrementWins: (state) => {
      state.wins += 1
    },
    incrementLoses: (state) => {
      state.loses += 1
    },
    incrementWinsInTry: (state, action) => {
      state.winsInTry.push(action.payload)
    },
  },
})

export const { setChanceCounter, resetChanceCounter, setResetKey, incrementWins, incrementLoses, incrementWinsInTry } =
  slice.actions
export default slice.reducer
