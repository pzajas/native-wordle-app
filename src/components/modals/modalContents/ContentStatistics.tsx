import { StyleSheet, View } from 'react-native'
import { theme } from '../../../styles/theme'
import { VerticalBarChart } from '../modalCharts/VerticalBarChart'
import { HorizontalBarChart } from '../modalCharts/HorizontalBarChart'

export const ContentStatistics = () => {
  return (
    <View style={styles.container}>
      <VerticalBarChart text={'Wins and loses breakdown'} />
      <HorizontalBarChart text={'Wins in particular tries'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    gap: 20,
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    color: theme.colors.yellow,
    fontWeight: 'bold',
  },
})
