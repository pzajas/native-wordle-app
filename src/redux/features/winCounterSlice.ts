import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'wins',
  initialState: 0,
  reducers: {
    incrementWins: (state) => state + 1,
  },
})

export const { incrementWins } = counterSlice.actions
export default counterSlice.reducer
