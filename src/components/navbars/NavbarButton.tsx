import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { getStyles } from '@styles/styles'
import { IRootState } from '@/typescript/types'

const NavbarButton = ({
  iconName,
  iconSize,
  onPress,
  flag,
}: {
  iconName?: string
  iconSize?: number
  flag?: boolean
  onPress: () => void
}) => {
  const { language }: { language: string } = useSelector((state: IRootState) => state.strings)

  const theme = useSelector((state: IRootState) => state.theme)
  const styles = getStyles(theme)

  return (
    <TouchableOpacity onPress={onPress} style={styles.navbarButton}>
      {!flag ? (
        <Icon name={iconName} size={iconSize} color={theme.primaryTextColor} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: `https://flagsapi.com/${language}/shiny/64.png` }}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <Text style={{ color: theme.primaryTextColor, fontWeight: 'bold' }}>{`${language}`}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default NavbarButton
