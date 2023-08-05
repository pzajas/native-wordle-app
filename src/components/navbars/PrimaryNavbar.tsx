import { View, Platform } from 'react-native'
import { iconNames } from '../../utils/dictionary'
import { useDispatch, useSelector } from 'react-redux'
import { getStyles } from '../../styles/styles'
import { setIsModalvisible } from '../../redux/features/booleanSlice'
import { setModalText } from '../../redux/features/stringsSlice'

import NavbarButton from './NavbarButton'

export const PrimaryNavbar = () => {
  // const iconSize = Platform.OS === 'web' ? 22 : 24

  const theme = useSelector((state) => state.theme)
  const styles = getStyles(theme)

  const dispatch = useDispatch()
  const { isModalVisible } = useSelector((state) => state.boolean)

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarButtons}>
        <NavbarButton
          onPress={() => {
            dispatch(setIsModalvisible(!isModalVisible))
            dispatch(setModalText('LANGUAGES'))
          }}
          flag
        />
      </View>

      <View style={styles.navbarButtons}>
        <NavbarButton
          onPress={() => {
            dispatch(setIsModalvisible(!isModalVisible))
            dispatch(setModalText('STATISTICS'))
          }}
          iconName={iconNames.USER}
          iconSize={24}
        />

        <NavbarButton
          onPress={() => {
            dispatch(setIsModalvisible(!isModalVisible))
            dispatch(setModalText('OPTIONS'))
          }}
          iconName={iconNames.COG}
          iconSize={24}
        />
        <NavbarButton
          onPress={() => {
            dispatch(setIsModalvisible(!isModalVisible))
            dispatch(setModalText('INFORMATION'))
          }}
          iconName={iconNames.QUESTION}
          iconSize={24}
        />
      </View>
    </View>
  )
}
