import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native'

import { theme } from '../../styles/theme'
import NavbarButton from './NavbarButton'

export const PrimaryNavbar = ({
  title,
  modalVisible,
  setModalVisible,
  setModalText,
}) => {
  const iconSize = Platform.OS === 'web' ? 18 : 28

  return (
    <View style={styles.container}>
      <View style={[styles.buttons, { marginLeft: 20 }]}>
        <NavbarButton
          onPress={() => {
            setModalVisible(!modalVisible)
            setModalText('stats')
          }}
          iconName="user-circle"
          iconSize={iconSize}
        />
        <NavbarButton
          onPress={() => {
            setModalVisible(!modalVisible)
            setModalText('github')
          }}
          iconName="github"
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
            setModalText('options')
          }}
          iconName="cog"
          iconSize={iconSize}
        />
        <NavbarButton
          onPress={() => {
            setModalVisible(!modalVisible)
            setModalText('info')
          }}
          iconName="question-circle"
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
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})
