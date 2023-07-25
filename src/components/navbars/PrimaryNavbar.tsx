import { View, Text, StyleSheet, Platform } from 'react-native'
import { INavbarProps } from '../../typescript/types'
import { theme } from '../../styles/theme'
import { iconNames } from '../../utils/dictionary'

import NavbarButton from './NavbarButton'

export const PrimaryNavbar = ({
  title,
  modalVisible,
  setModalVisible,
  setModalText,
}: INavbarProps) => {
  const iconSize = Platform.OS === 'web' ? 18 : 28

  return (
    <View style={styles.container}>
      <View style={[styles.buttons, { marginLeft: 20 }]}>
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
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={[styles.buttons, { marginRight: 20 }]}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    width: '100%',
    backgroundColor: theme.colors.black,
    borderBottomColor: theme.colors.grey.light,
    borderBottomWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
  },
  title: {
    color: theme.colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})
