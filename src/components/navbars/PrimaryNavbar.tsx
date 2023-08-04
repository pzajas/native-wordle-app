import { View, Text, Platform } from 'react-native'
import { INavbarProps } from '../../typescript/types'

import { iconNames } from '../../utils/dictionary'

import NavbarButton from './NavbarButton'
import { useDispatch, useSelector } from 'react-redux'
import { getStyles } from '../../styles/styles'
import { setIsModalvisible } from '../../redux/features/booleanSlice'
import { setModalText } from '../../redux/features/stringsSlice'

export const PrimaryNavbar = ({ title }: INavbarProps) => {
  const iconSize = Platform.OS === 'web' ? 18 : 28

  const theme = useSelector((state) => state.theme)
  const styles = getStyles(theme)

  const dispatch = useDispatch()
  const { isModalVisible } = useSelector((state) => state.boolean)

  return (
    <View style={styles.navbarContainer}>
      <View style={[styles.navbarButtons, { marginLeft: 20 }]}>
        <NavbarButton
          onPress={() => {
            dispatch(setIsModalvisible(!isModalVisible))
            dispatch(setModalText('STATISTICS'))
          }}
          iconName={iconNames.USER}
          iconSize={iconSize}
        />
        <NavbarButton
          onPress={() => {
            dispatch(setIsModalvisible(!isModalVisible))
            dispatch(setModalText('GITHUB'))
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
            dispatch(setIsModalvisible(!isModalVisible))
            dispatch(setModalText('OPTIONS'))
          }}
          iconName={iconNames.COG}
          iconSize={iconSize}
        />
        <NavbarButton
          onPress={() => {
            dispatch(setIsModalvisible(!isModalVisible))
            dispatch(setModalText('INFORMATION'))
          }}
          iconName={iconNames.QUESTION}
          iconSize={iconSize}
        />
      </View>
    </View>
  )
}
