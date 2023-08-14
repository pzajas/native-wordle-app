import { useEffect, useState } from 'react'
import { View, Dimensions } from 'react-native'
import { iconNames } from '@utils/dictionary'
import { useDispatch, useSelector } from 'react-redux'
import { getStyles } from '@styles/styles'
import { setIsModalvisible } from '@redux/features/booleanSlice'
import { setModalText } from '@redux/features/stringsSlice'

import NavbarButton from './NavbarButton'
import { IRootState } from '@/typescript/types'

export const PrimaryNavbar = () => {
  const [center, setCenter] = useState(0)

  const { isModalVisible } = useSelector((state: IRootState) => state.boolean)

  const theme = useSelector((state: IRootState) => state.theme)
  const styles = getStyles(theme)
  const dispatch = useDispatch()

  const calculateCenter = () => {
    const windowWidth = Dimensions.get('window').width
    const containerWidth = 270
    const calculatedCenter = (windowWidth - containerWidth) / 2

    setCenter(calculatedCenter)
  }

  useEffect(() => {
    calculateCenter()
    Dimensions.addEventListener('change', calculateCenter)
  }, [])

  return (
    <View style={[styles.navbarContainer, center !== null && { marginLeft: center, marginRight: center }]}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[styles.navbarButtons]}>
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
    </View>
  )
}
