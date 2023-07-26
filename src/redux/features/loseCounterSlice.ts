import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'loses',
  initialState: 0,
  reducers: {
    incrementLoses: (state) => state + 1,
  },
})

export const { incrementLoses } = counterSlice.actions
export default counterSlice.reducer
