import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const ContentStatistics = () => {
  const wins: number = useSelector((state: any) => state.wins)
  const loses: number = useSelector((state: any) => state.loses)
  const winsInRow: number = useSelector((state: any) => state.winsInRow)

  const chancesArray: any = useSelector((state: any) => state.winsInTry)

  const filterArr = (arr, number) => {
    const filtered = arr.filter((item) => item === number)

    return filtered.length
  }

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          gap: 20,
          marginTop: 20,
        }}
      >
        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Games Played</Text>
          <Text style={{ color: 'white' }}>{wins + loses}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Games Won</Text>
          <Text style={{ color: 'white' }}>{wins}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Wins in row</Text>
          <Text style={{ color: 'white' }}>{winsInRow}</Text>
        </View>
      </View>

      <View style={{ gap: 20, marginTop: 20, marginBottom: 20 }}>
        <Text style={{ color: 'white' }}>Wins in particular tries</Text>

        <View
          style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
        >
          <Text style={{ color: 'white' }}>
            1: {filterArr(chancesArray, 1)}
          </Text>
          <Text style={{ color: 'white' }}>
            2: {filterArr(chancesArray, 2)}
          </Text>
          <Text style={{ color: 'white' }}>
            3: {filterArr(chancesArray, 3)}
          </Text>
          <Text style={{ color: 'white' }}>
            4: {filterArr(chancesArray, 4)}
          </Text>
          <Text style={{ color: 'white' }}>
            5: {filterArr(chancesArray, 5)}
          </Text>
          <Text style={{ color: 'white' }}>
            6: {filterArr(chancesArray, 6)}
          </Text>
        </View>
      </View>
    </>
  )
}

export default ContentStatistics
