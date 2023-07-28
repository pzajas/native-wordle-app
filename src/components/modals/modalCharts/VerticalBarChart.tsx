import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native'
import { theme } from '../../../styles/theme'

export const VerticalBarChart = ({ text }: { text: string }) => {
  const wins: number = useSelector((state: any) => state.wins)
  const loses: number = useSelector((state: any) => state.loses)

  const data = [
    { category: 'games', value: wins + loses },
    { category: 'wins', value: wins },
    { category: 'loses', value: loses },
  ]

  return (
    <View>
      <Text style={{ color: theme.colors.white }}>{text}</Text>
      <VictoryChart height={300} width={300} domainPadding={{ x: [5, 5] }}>
        <VictoryBar
          data={data}
          x="category"
          y="value"
          labels={({ datum }) => datum.value}
          style={{
            data: {
              fill: theme.colors.grey.dark,
              width: 50,
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
