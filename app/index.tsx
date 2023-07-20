import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import { FlatList } from 'react-native-gesture-handler'

import { CONST } from '../src/utils/constants'

import axios from 'axios'
import UserInputs from './UserInputs'

const App = () => {
  const [randomWord, setRandomWord] = useState('')
  const [counter, setCounter] = useState(1)

  const [fontLoaded] = useFonts({
    'custom-font': require('../assets/fonts/Poppins-Bold.ttf'),
  })
  const rowIds = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase'
        )
        setRandomWord(response?.data)
      } catch (error) {
        console.error(CONST.API_ERROR, error)
      }
    }

    void fetchData()
  }, [])

  if (!fontLoaded) {
    return null
  }

  console.log(randomWord)

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'center',
          height: '100%',
          gap: 1,
        }}
        data={rowIds}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <UserInputs
            rowId={item}
            counter={counter}
            randomWord={randomWord}
            setCounter={setCounter}
          />
        )}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#181818',
    fontWeight: 600,
    fontFamily: 'custom-font',
  },
  customText: {
    fontFamily: 'custom-font',
    fontSize: 40,
    color: 'white',
  },
})
