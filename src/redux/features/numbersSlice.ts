import { createSlice } from '@reduxjs/toolkit'

export interface INumbers {
  chanceCounter: number
  resetKey: number
}

const initialState: INumbers = {
  chanceCounter: 1,
  resetKey: 0,
}

const slice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    setChanceCounter: (state) => {
      state.chanceCounter += 1
    },
    resetChanceCounter: (state) => {
      state.chanceCounter = 0
    },
    setResetKey: (state) => {
      state.resetKey += 1
    },
  },
})

export const { setChanceCounter, resetChanceCounter, setResetKey } = slice.actions
export default slice.reducer
