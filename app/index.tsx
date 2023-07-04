import { StyleSheet, View } from 'react-native'
import Game from './Game'

const index = () => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 6 }, (_, index) => (
        <Game key={index} />
      ))}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
  input: {
    backgroundColor: 'grey',
    color: 'white',
    width: 40,
    height: 40,
    marginRight: 10,
  },

  match: {
    backgroundColor: 'green',
    color: 'white',
    width: 40,
    height: 40,
    marginRight: 10,
  },
})
