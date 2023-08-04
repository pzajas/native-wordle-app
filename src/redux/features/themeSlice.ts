import { createSlice } from '@reduxjs/toolkit'

export interface ITheme {
  primaryColor: string
  secondaryColor: string
  primaryTextColor: string
  normal: string
  focused: string
  match: string
  present: string
  white: string
  black: string
  green: string
  red: string
  matchColorBlind: string
  presentColorBlind: string
}

const themePresets = {
  dark: {
    primaryColor: '#181818',
    secondaryColor: '#3c3c3c',

    primaryTextColor: '#fff',

    normal: '#3c3c3c',
    focused: '#252525',
    match: '#548c4c',
    present: '#b49c3c',

    matchColorBlind: '#f17e2d',
    presentColorBlind: '#3f94e9',

    white: '#fff',
    black: '#181818',
    green: '#548c4c',
    red: 'red',
  },
  light: {
    primaryColor: '#fff',
    secondaryColor: 'grey',

    primaryTextColor: 'rgba(55,55,55,255)',

    normal: 'grey',
    focused: '#f2f2f2',
    match: '#548c4c',
    present: '#b49c3c',

    matchColorBlind: '#f17e2d',
    presentColorBlind: '#3f94e9',

    white: '#fff',
    black: '#181818',
    green: '#548c4c',
    red: 'red',
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
