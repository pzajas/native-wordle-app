import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const themeNameSlice = createSlice({
  name: 'themeName',
  initialState: 'dark', // You can set the default theme name here
  reducers: {
    setThemeName: (state, action: PayloadAction<string>) => {
      return action.payload
    },
  },
})

export const { setThemeName } = themeNameSlice.actions
export default themeNameSlice.reducer
