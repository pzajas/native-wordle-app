import { View, Text, Platform } from 'react-native'
import { INavbarProps } from '../../typescript/types'

import { iconNames } from '../../utils/dictionary'

import NavbarButton from './NavbarButton'
import { useSelector } from 'react-redux'
import { getStyles } from '../../styles/styles'

export const PrimaryNavbar = ({
  title,
  modalVisible,
  setModalVisible,
  setModalText,
}: INavbarProps) => {
  const iconSize = Platform.OS === 'web' ? 18 : 28

  const theme = useSelector((state) => state.theme)
  const styles = getStyles(theme)

  return (
    <View style={styles.navbarContainer}>
      <View style={[styles.navbarButtons, { marginLeft: 20 }]}>
        <NavbarButton
          onPress={() => {
            setModalVisible(!modalVisible)
            setModalText('STATISTICS')
          }}
          iconName={iconNames.USER}
          iconSize={iconSize}
        />
        <NavbarButton
          onPress={() => {
            setModalVisible(!modalVisible)
            setModalText('GITHUB')
          }}
          iconName={iconNames.GITHUB}
          iconSize={iconSize}
        />
      </View>

      <View>
        <Text style={styles.navbarTitle}>{title}</Text>
      </View>

      <View style={[styles.navbarButtons, { marginRight: 20 }]}>
        <NavbarButton
          onPress={() => {
            setModalVisible(!modalVisible)
            setModalText('OPTIONS')
          }}
          iconName={iconNames.COG}
          iconSize={iconSize}
        />
        <NavbarButton
          onPress={() => {
            setModalVisible(!modalVisible)
            setModalText('INFORMATION')
          }}
          iconName={iconNames.QUESTION}
          iconSize={iconSize}
        />
      </View>
    </View>
  )
}
