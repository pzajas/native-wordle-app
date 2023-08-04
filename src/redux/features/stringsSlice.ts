import { createSlice } from '@reduxjs/toolkit'

export interface IStrings {
  randomWord: string
  modalText: string
}

const initialState: IStrings = {
  randomWord: '',
  modalText: '',
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
    setThemeName: (state, action) => {
      return action.payload
    },
  },
})

export const { setRandomWord, setModalText } = slice.actions
export default slice.reducer
