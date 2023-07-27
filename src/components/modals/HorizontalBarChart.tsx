import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native'
import { theme } from '../../styles/theme'

const HorizontalBarChart = ({ text }: { text: string }) => {
  const chancesArray: any = useSelector((state: any) => state.winsInTry)

  const filterArr = (array: [], number: number) => {
    const filtered = array.filter((item) => item === number)

    return filtered.length
  }

  const data = Array.from({ length: 6 }).map((_, index) => ({
    category: `${6 - index}`,
    value: filterArr(chancesArray, 6 - index),
  }))

  return (
    <View>
      <Text style={{ color: theme.colors.white }}>{text}</Text>
      <VictoryChart height={200} width={300} domainPadding={{ x: [0, 0] }}>
        <VictoryBar
          data={data}
          horizontal
          x="category"
          y="value"
          labels={({ datum }) => datum.value}
          style={{
            data: {
              fill: theme.colors.grey.dark,
              width: 15,
            },
            labels: {
              fontSize: 12,
              fill: theme.colors.white,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, fill: theme.colors.white, opacity: 0 },
          }}
        />
        <VictoryAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, fill: theme.colors.white },
          }}
        />
      </VictoryChart>
    </View>
  )
}

export default HorizontalBarChart
