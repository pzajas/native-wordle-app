import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { CONST } from '../src/utils/constants'

import axios from 'axios'
import UserInputs from './UserInputs'

const App = () => {
  const [randomWord, setRandomWord] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://random-word-api.vercel.app/api?words=1&length=5'
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
      <UserInputs randomWord={randomWord} />
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
