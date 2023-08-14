import { View, Text, Switch, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '@redux/features/themeSlice'
import { setIsColorBlindModeOn, setShowMultipleLettersIndicator } from '@redux/features/booleanSlice'
import { IRootState } from '@/typescript/types'

interface ISwitchItem {
  text: string
  value: boolean
  valueChange: () => void
}

export const ContentOptions = () => {
  const { isColorBlindModeOn, isMultipleLettersMode } = useSelector((state: IRootState) => state.boolean)

  const theme = useSelector((state: IRootState) => state.theme)
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

  const renderItem = ({ item }: { item: ISwitchItem }) => {
    const { text, value, valueChange } = item

    return (
      <TouchableOpacity onPress={valueChange}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, width: 300 }}>
          <Text style={{ color: theme.primaryTextColor }}>{text}</Text>
          <Switch
            value={value}
            onValueChange={valueChange}
            thumbColor={value ? theme.match : theme.grey}
            trackColor={{ false: theme.grey, true: theme.present }}
          />
        </View>
      </TouchableOpacity>
    )
  }

  return <FlatList data={optionsArray} renderItem={renderItem} keyExtractor={(item) => item.text} />
}
