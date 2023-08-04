import { useEffect } from 'react'
import { FlatList, View, ActivityIndicator, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import { fetchData } from '../funcs/helpers'
import { PrimaryNavbar } from '../src/components/navbars/PrimaryNavbar'
import { PrimaryModal } from '../src/components/modals/PrimaryModal'
import { ContentInformation } from '../src/components/modals/modalContents/ContentInformation'
import { ContentStatistics } from '../src/components/modals/modalContents/ContentStatistics'
import { getStyles } from '../src/styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { setRandomWord } from '../src/redux/features/stringsSlice'
import { resetChanceCounter, setChanceCounter, setResetKey } from '../src/redux/features/numbersSlice'
import { setIsSubmitting } from '../src/redux/features/booleanSlice'
import { IRootState } from '../src/typescript/types'

import UserInputs from './UserInputs'
import FlashMessage from 'react-native-flash-message'
import ContentOptions from '../src/components/modals/modalContents/ContentOptions'

export const App = () => {
  const { randomWord, modalText } = useSelector((state: IRootState) => state.strings)
  const { resetKey } = useSelector((state: IRootState) => state.numbers)
  const { isSubmitting, isModalVisible } = useSelector((state: IRootState) => state.boolean)
  const theme = useSelector((state: IRootState) => state.theme)

  const dispatch = useDispatch()
  const styles = getStyles(theme)

  const handleGameReset = () => {
    dispatch(setResetKey(1))
    dispatch(setChanceCounter(1))
    dispatch(setIsSubmitting(false))

    void fetchData(dispatch, setRandomWord)
  }

  const [fontLoaded] = useFonts({
    'custom-font': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    dispatch(resetChanceCounter())
    void fetchData(dispatch, setRandomWord)
  }, [])

  console.log(randomWord)

  if (!fontLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.appWrapper}>
      <PrimaryNavbar title="WORDY" />
      <FlatList
        key={resetKey}
        contentContainerStyle={styles.appFlatList}
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <UserInputs handleGameReset={handleGameReset} rowId={item} />}
      />

      {isModalVisible ? (
        <PrimaryModal handleGameReset={handleGameReset}>
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
