import { View, Text, Switch } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../../redux/features/themeSlice'
import { useState, useEffect } from 'react'

const ContentOptions = () => {
  const [colorMode, setColorMode] = useState('')

  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    setColorMode(theme.primaryColor === theme.white ? 'light' : 'dark')
  }, [theme])

  const handleThemeToggle = () => {
    if (theme.primaryColor === theme.white) {
      dispatch(setTheme('dark'))
    } else {
      dispatch(setTheme('light'))
    }
  }

  return (
    <View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
      >
        <Text style={{ color: theme.primaryTextColor, marginRight: 15 }}>
          {colorMode}
        </Text>
        <Switch
          value={theme.primaryColor === theme.white}
          onValueChange={handleThemeToggle}
        />
      </View>
    </View>
  )
}

export default ContentOptions
