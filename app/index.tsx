import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import { theme } from '../src/styles/theme'
import { fetchData } from '../funcs/fetchData'

import UserInputs from './UserInputs'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  const [randomWord, setRandomWord] = useState('')
  const [counter, setCounter] = useState(1)
  const [resetKey, setResetKey] = useState(0)
  const [gameResult, setGameResult] = useState(false)

  const rowIds = [1, 2, 3, 4, 5, 6]

  const [fontLoaded] = useFonts({
    'custom-font': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    void fetchData(setRandomWord)
  }, [])

  const handleGameReset = () => {
    setResetKey((prevKey) => prevKey + 1)
    setCounter(0)

    void fetchData(setRandomWord)
  }

  if (!fontLoaded) {
    return null
  }

  console.log(randomWord)

  return (
    <View style={styles.container}>
      <FlatList
        key={resetKey}
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
            setRandomWord={setRandomWord}
            setCounter={setCounter}
            gameResult={gameResult}
            setGameResult={setGameResult}
            handleGameReset={handleGameReset}
          />
        )}
      />
      <FlashMessage position="top" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: theme.colors.black,
    fontWeight: 600,
    fontFamily: 'custom-font',
  },
  customText: {
    fontFamily: 'custom-font',
    fontSize: 40,
    color: 'white',
  },
})
