import { View, Text, Switch } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setTheme } from '../../../redux/features/theme/themeSlice'

const ContentOptions = () => {
  const theme = useSelector((state: any) => state.theme)
  const [isLightTheme, setIsLightTheme] = useState(theme === 'light')

  const dispatch = useDispatch()

  const handleThemeToggle = (value: boolean) => {
    setIsLightTheme(value)
    dispatch(setTheme(value ? 'light' : 'dark'))
  }

  return (
    <View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
      >
        <Text style={{ color: theme.primaryTextColor, marginRight: 15 }}>
          {isLightTheme ? 'Light Theme' : 'Dark Theme'}
        </Text>
        <Switch value={isLightTheme} onValueChange={handleThemeToggle} />
      </View>

      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
      >
        <Text style={{ color: theme.primaryTextColor, marginRight: 15 }}>
          {isLightTheme ? 'Light Theme' : 'Dark Theme'}
        </Text>
        <Switch value={isLightTheme} onValueChange={handleThemeToggle} />
      </View>
    </View>
  )
}

export default ContentOptions
