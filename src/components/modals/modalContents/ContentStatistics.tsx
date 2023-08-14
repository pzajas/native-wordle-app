import { View } from 'react-native'
import { VerticalBarChart } from '../modalCharts/VerticalBarChart'
import { HorizontalBarChart } from '../modalCharts/HorizontalBarChart'
import { useSelector } from 'react-redux'
import { getStyles } from '@styles/styles'
import { IRootState } from '@/typescript/types'

export const ContentStatistics = () => {
  const selectedTheme = useSelector((state: IRootState) => state.theme)
  const styles = getStyles(selectedTheme)

  return (
    <View style={styles.statisticsModalContainer}>
      <VerticalBarChart text={'Wins and loses breakdown'} />
      <HorizontalBarChart text={'Wins in particular tries'} />
    </View>
  )
}
