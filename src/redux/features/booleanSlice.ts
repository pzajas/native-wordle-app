import { createSlice } from '@reduxjs/toolkit'

export interface IBoolean {
  gameResult: boolean
  isSubmitting: boolean
  isModalVisible: boolean
  isColorBlindModeOn: boolean
  isMultipleLettersMode: boolean
}

const initialState = {
  gameResult: false,
  isSubmitting: false,
  isModalVisible: false,
  isColorBlindModeOn: false,
  isMultipleLettersMode: false,
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
    setIsColorBlindModeOn: (state, action) => {
      state.isColorBlindModeOn = action.payload
    },
    setShowMultipleLettersIndicator: (state, action) => {
      state.isMultipleLettersMode = action.payload
    },
  },
})

export const {
  setGameResult,
  setIsSubmitting,
  setIsModalvisible,
  setIsColorBlindModeOn,
  setShowMultipleLettersIndicator,
} = slice.actions
export default slice.reducer
