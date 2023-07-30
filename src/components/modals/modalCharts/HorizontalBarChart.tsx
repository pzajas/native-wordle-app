import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native'

export const HorizontalBarChart = ({ text }: { text: string }) => {
  const chancesArray: any = useSelector((state: any) => state.winsInTry)
  const theme = useSelector((state) => state.theme)

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
      <Text style={{ color: theme.primaryTextColor }}>{text}</Text>
      <VictoryChart height={200} width={300} domainPadding={{ x: [0, 0] }}>
        <VictoryBar
          data={data}
          horizontal
          x="category"
          y="value"
          labels={({ datum }) => datum.value}
          style={{
            data: {
              fill: theme.primaryTextColor,
              width: 15,
            },
            labels: {
              fontSize: 12,
              fill: theme.primaryTextColor,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: {
              fontSize: 12,
              fill: theme.primaryTextColor,
              opacity: 0,
            },
          }}
        />
        <VictoryAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, fill: theme.primaryTextColor },
          }}
        />
      </VictoryChart>
    </View>
  )
}
