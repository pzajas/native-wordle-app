import { View, Text, Switch, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../../redux/features/themeSlice'
import { setIsColorBlindModeOn, setShowMultipleLettersIndicator } from '../../../redux/features/booleanSlice'

export const ContentOptions = () => {
  const { isColorBlindModeOn, isMultipleLettersMode } = useSelector((state) => state.boolean)

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

  const handleMultipleLettersIndicator = () => {
    dispatch(setShowMultipleLettersIndicator(!isMultipleLettersMode))
  }

  const optionsArray = [
    { text: 'Light mode', value: theme.primaryColor === theme.white, valueChange: handleThemeToggle },
    { text: 'Color Blind Mode', value: isColorBlindModeOn, valueChange: handleColorBlindMode },
    { text: 'Show Multiple Indicator', value: isMultipleLettersMode, valueChange: handleMultipleLettersIndicator },
  ]

  const renderItem = ({ item }) => {
    const { text, value, valueChange } = item

    return (
      <TouchableOpacity onPress={valueChange}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, width: 300 }}>
          <Text style={{ color: theme.primaryTextColor }}>{text}</Text>
          <Switch value={value} onValueChange={valueChange} />
        </View>
      </TouchableOpacity>
    )
  }

  return <FlatList data={optionsArray} renderItem={renderItem} keyExtractor={(item) => item.text} />
}
