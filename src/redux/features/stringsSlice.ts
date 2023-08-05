import { createSlice } from '@reduxjs/toolkit'

export interface IStrings {
  randomWord: string
  modalText: string
  language: string
}

const initialState: IStrings = {
  randomWord: '',
  modalText: '',
  language: 'GB',
}

const slice = createSlice({
  name: 'strings',
  initialState,
  reducers: {
    setRandomWord: (state, action) => {
      state.randomWord = action.payload
    },
    setModalText: (state, action) => {
      state.modalText = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

export const { setRandomWord, setModalText, setLanguage } = slice.actions
export default slice.reducer
