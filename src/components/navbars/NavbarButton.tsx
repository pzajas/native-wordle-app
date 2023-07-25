import { TouchableOpacity } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

const NavbarButton = ({
  iconName,
  iconSize,
  onPress,
}: {
  iconName: string
  iconSize: number
  onPress: () => void
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={theme.colors.white} />
    </TouchableOpacity>
  )
}

export default NavbarButton
