import { TouchableOpacity } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

const NavbarButton = ({ iconName, iconSize, onPress }: { iconName: string; iconSize: number; onPress: () => void }) => {
  const theme = useSelector((state) => state.theme)
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={theme.primaryTextColor} />
    </TouchableOpacity>
  )
}

export default NavbarButton
