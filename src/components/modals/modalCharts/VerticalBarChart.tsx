import { IRootState } from '@/typescript/types'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native'

export const VerticalBarChart = ({ text }: { text: string }) => {
  const { wins, loses }: { wins: number; loses: number } = useSelector((state: IRootState) => state.numbers)

  const theme = useSelector((state: IRootState) => state.theme)

  const data = [
    { category: 'games', value: wins + loses },
    { category: 'wins', value: wins },
    { category: 'loses', value: loses },
  ]

  return (
    <View>
      <Text style={{ color: theme.primaryTextColor }}>{text}</Text>
      <VictoryChart height={300} width={300} domainPadding={{ x: [5, 5] }}>
        <VictoryBar
          data={data}
          x="category"
          y="value"
          labels={({ datum }) => datum.value}
          style={{
            data: {
              fill: theme.primaryTextColor,
              width: 50,
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
            tickLabels: {
              fontSize: 12,
              fill: theme.primaryTextColor,
            },
          }}
        />
      </VictoryChart>
    </View>
  )
}
