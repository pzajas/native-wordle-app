import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const counterSlice = createSlice({
  name: 'winsInRow',
  initialState,
  reducers: {
    incrementWinsInRow: (state) => state + 1,
    resetWinsInRow: () => initialState,
  },
})

export const { incrementWinsInRow, resetWinsInRow } = counterSlice.actions
export default counterSlice.reducer
