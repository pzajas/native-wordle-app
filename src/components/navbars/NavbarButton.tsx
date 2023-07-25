import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'

const NavbarButton = ({ onPress, iconName, iconSize }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={iconSize} color="white" />
    </TouchableOpacity>
  )
}

export default NavbarButton
