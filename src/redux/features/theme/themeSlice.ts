import { createSlice } from '@reduxjs/toolkit'

const themePresets = {
  dark: {
    primaryColor: '#181818',
    secondaryColor: '#3c3c3c',

    primaryTextColor: 'white',

    normal: '#3c3c3c',
    focused: '#555555',
    match: '#548c4c',
    present: '#b49c3c',
  },
  light: {
    primaryColor: '#fff',
    secondaryColor: 'grey',

    primaryTextColor: 'black',

    normal: 'grey',
    focused: 'lightgrey',
    match: '#548c4c',
    present: '#b49c3c',
  },
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: themePresets.dark,
  reducers: {
    setTheme: (state, action) => {
      return themePresets[action.payload]
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
