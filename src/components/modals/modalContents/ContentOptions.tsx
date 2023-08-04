import { View, Text, Switch } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../../redux/features/themeSlice'
import { setIsColorBlindModeOn } from '../../../redux/features/booleanSlice'

const ContentOptions = () => {
  const { isColorBlindModeOn } = useSelector((state) => state.boolean)

  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  const handleThemeToggle = () => {
    if (theme.primaryColor === theme.white) {
      dispatch(setTheme('dark'))
    } else {
      dispatch(setTheme('light'))
    }
  }

  const handleColorBlindMode = () => {
    dispatch(setIsColorBlindModeOn(!isColorBlindModeOn))
  }

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ color: theme.primaryTextColor, marginRight: 15, width: 200 }}>Light Mode</Text>
        <Switch value={theme.primaryColor === theme.white} onValueChange={handleThemeToggle} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ color: theme.primaryTextColor, marginRight: 15, width: 200 }}>Color Blind Mode</Text>
        <Switch value={isColorBlindModeOn} onValueChange={handleColorBlindMode} />
      </View>
    </View>
  )
}

export default ContentOptions
