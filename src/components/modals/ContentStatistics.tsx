import { StyleSheet, View } from 'react-native'
import VerticalBarChart from './VerticalBarChart'
import HorizontalBarChart from './HorizontalBarChart'
import { theme } from '../../styles/theme'

const ContentStatistics = () => {
  return (
    <View style={styles.container}>
      <VerticalBarChart text={'Wins and loses breakdown'} />
      <HorizontalBarChart text={'Wins in particular tries'} />
    </View>
  )
}

export default ContentStatistics

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
