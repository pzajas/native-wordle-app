import { useEffect, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native'
import { useFonts } from 'expo-font'
import { theme } from '../src/styles/theme'
import { fetchData } from '../funcs/helpers'

import UserInputs from './UserInputs'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  const [randomWord, setRandomWord] = useState('')
  const [chanceCounter, setChanceCounter] = useState(1)
  const [resetKey, setResetKey] = useState(0)
  const [gameResult, setGameResult] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleGameReset = () => {
    setResetKey((prevKey) => prevKey + 1)
    setChanceCounter(1)

    void fetchData(setRandomWord)
  }
  console.log(randomWord)

  const [fontLoaded] = useFonts({
    'custom-font': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    void fetchData(setRandomWord)
  }, [])

  if (!fontLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <FlatList
        key={resetKey}
        contentContainerStyle={{
          justifyContent: 'center',
          height: '100%',
          gap: 1,
        }}
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <UserInputs
            rowId={item}
            randomWord={randomWord}
            setRandomWord={setRandomWord}
            chanceCounter={chanceCounter}
            setChanceCounter={setChanceCounter}
            gameResult={gameResult}
            setGameResult={setGameResult}
            handleGameReset={handleGameReset}
            setIsSubmitting={setIsSubmitting}
          />
        )}
      />
      <FlashMessage position="top" />

      {isSubmitting && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <ActivityIndicator
            size="large"
            color={theme.colors.white}
          />
        </View>
      )}
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
  },
  customText: {
    fontSize: 40,
    color: 'white',
  },
})
