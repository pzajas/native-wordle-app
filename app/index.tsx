import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { CONST } from '../src/utils/constants'

import axios from 'axios'
import UserInput from './UserInput'

const App = () => {
  const [randomWord, setRandomWord] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://polish-wordle-api.onrender.com/words/random_word'
        )
        setRandomWord(response?.data)
      } catch (error) {
        console.error(CONST.API_ERROR, error)
      }
    }

    void fetchData()
  }, [])
  return (
    <View style={styles.container}>
      <UserInput randomWord={randomWord} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
})
