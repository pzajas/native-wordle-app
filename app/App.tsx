import { useEffect, useState } from 'react'
import { FlatList, View, ActivityIndicator, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import { theme } from '../src/styles/theme'
import { fetchData } from '../funcs/helpers'
import { PrimaryNavbar } from '../src/components/navbars/PrimaryNavbar'
import { PrimaryModal } from '../src/components/modals/PrimaryModal'
import { ContentInformation } from '../src/components/modals/modalContents/ContentInformation'
import { ContentStatistics } from '../src/components/modals/modalContents/ContentStatistics'
import { getStyles } from '../src/styles/styles'
import { useSelector } from 'react-redux'

import UserInputs from './UserInputs'
import FlashMessage from 'react-native-flash-message'
import ContentOptions from '../src/components/modals/modalContents/ContentOptions'

export const App = () => {
  const [randomWord, setRandomWord] = useState('')
  const [modalText, setModalText] = useState('')
  const [chanceCounter, setChanceCounter] = useState(1)
  const [resetKey, setResetKey] = useState(0)
  const [gameResult, setGameResult] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const theme = useSelector((state) => state.theme)
  const styles = getStyles(theme)

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
    <SafeAreaView style={styles.appWrapper}>
      <PrimaryNavbar
        title="WORDY"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setModalText={setModalText}
      />
      <FlatList
        key={resetKey}
        contentContainerStyle={styles.appFlatList}
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
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalText={modalText}
            setModalText={setModalText}
          />
        )}
      />

      {modalVisible ? (
        <PrimaryModal
          modalText={modalText}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleGameReset={handleGameReset}
          setGameResult={setGameResult}
          randomWord={randomWord}
        >
          {modalText === 'INFORMATION' && <ContentInformation />}
          {modalText === 'STATISTICS' && <ContentStatistics />}
          {modalText === 'YOU WON' && <ContentStatistics />}
          {modalText === 'GAME OVER' && <ContentStatistics />}
          {modalText === 'OPTIONS' && <ContentOptions />}
        </PrimaryModal>
      ) : null}

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
          <ActivityIndicator size="large" color={theme.primaryTextColor} />
        </View>
      )}
    </SafeAreaView>
  )
}

export default App
