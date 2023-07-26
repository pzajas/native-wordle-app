import { createSlice } from '@reduxjs/toolkit'

const initialState: number[] = []

const counterSlice = createSlice({
  name: 'winsInTry',
  initialState,
  reducers: {
    addChanceNumber: (state: any, action: any) => {
      return [...state, action.payload]
    },
  },
})

export const { addChanceNumber } = counterSlice.actions
export default counterSlice.reducer
