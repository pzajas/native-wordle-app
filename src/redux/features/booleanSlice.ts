import { createSlice } from '@reduxjs/toolkit'

export interface IBoolean {
  gameResult: false
  isSubmitting: false
  isModalVisible: false
}

const initialState = {
  gameResult: false,
  isSubmitting: false,
  isModalVisible: false,
}

const slice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    setGameResult: (state, action) => {
      state.gameResult = action.payload
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload
    },
    setIsModalvisible: (state, action) => {
      state.isModalVisible = action.payload
    },
  },
})

export const { setGameResult, setIsSubmitting, setIsModalvisible } = slice.actions
export default slice.reducer
