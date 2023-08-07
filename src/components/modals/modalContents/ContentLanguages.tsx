import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '@redux/features/stringsSlice'
import { languagesArray } from '@utils/arrays'
import { getStyles } from '@styles/styles'
import { setIsModalvisible } from '@redux/features/booleanSlice'

export const ContentLanguages = () => {
  const theme = useSelector((state) => state.theme)
  const styles = getStyles(theme)

  const dispatch = useDispatch()

  const handleChangeLanguage = (language: string) => () => {
    dispatch(setLanguage(language))
    dispatch(setIsModalvisible(false))
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.languagesItem}
      onPress={handleChangeLanguage(item.language)}
      accessibilityLabel={item.text}
    >
      <Image source={{ uri: item.url }} style={styles.languagesItemImage} />
      <Text style={styles.languagesItemText}>{item.text}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.languagesContainer}>
      <FlatList
        data={languagesArray}
        contentContainerStyle={styles.languagesListContainer}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.language}
      />
    </View>
  )
}
