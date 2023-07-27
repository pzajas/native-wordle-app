import { View, Text } from 'react-native'
import VerticalBarChart from './VerticalBarChart'
import HorizontalBarChart from './HorizontalBarChart'

const ContentStatistics = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          gap: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'white' }}>Wins and loses breakdown</Text>
        <VerticalBarChart />

        <Text style={{ color: 'white' }}>Wins in particular tries</Text>
        <HorizontalBarChart />
      </View>
    </>
  )
}

export default ContentStatistics
