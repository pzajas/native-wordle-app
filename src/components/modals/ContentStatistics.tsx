import { View } from 'react-native'
import VerticalBarChart from './VerticalBarChart'
import HorizontalBarChart from './HorizontalBarChart'

const ContentStatistics = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        marginTop: 20,
      }}
    >
      <VerticalBarChart text={'Wins and loses breakdown'} />
      <HorizontalBarChart text={'Wins in particular tries'} />
    </View>
  )
}

export default ContentStatistics
