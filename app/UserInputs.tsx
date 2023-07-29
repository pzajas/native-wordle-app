import { useRef, useState, useEffect } from 'react'
import { View } from 'react-native'
import { TextInputRef, UserInputsProps } from '../src/typescript/types'

import UserInput from './UserInput'
import { useSelector } from 'react-redux'
import { getStyles } from '../src/styles/styles'

const UserInputs = ({
  randomWord,
  rowId,
  setChanceCounter,
  chanceCounter,
  gameResult,
  setGameResult,
  handleGameReset,
  setRandomWord,
  setIsSubmitting,
  setModalVisible,
  setModalText,
}: UserInputsProps) => {
  const [guess, setGuess] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const firstRef: TextInputRef = useRef(null)
  const secondRef: TextInputRef = useRef(null)
  const thirdRef: TextInputRef = useRef(null)
  const fourthRef: TextInputRef = useRef(null)
  const fifthRef: TextInputRef = useRef(null)

  const inputRefs = useRef([firstRef, secondRef, thirdRef, fourthRef, fifthRef])

  const selectedTheme = useSelector((state) => state.theme)
  const styles = getStyles(selectedTheme)

  useEffect(() => {
    if (guess.length === 0 && rowId === chanceCounter) {
      firstRef?.current?.focus()
    } else if (guess.length === 1) {
      secondRef?.current?.focus()
    } else if (guess.length === 2) {
      thirdRef?.current?.focus()
    } else if (guess.length === 3) {
      fourthRef?.current?.focus()
    } else if (guess.length === 4) {
      fifthRef?.current?.focus()
    }
  }, [guess.length, chanceCounter, rowId])

  const userInputProps = {
    rowId: rowId,
    guess: guess,
    setGuess: setGuess,
    isSubmitted: isSubmitted,
    setIsSubmitted: setIsSubmitted,
    chanceCounter: chanceCounter,
    setChanceCounter: setChanceCounter,
    gameResult: gameResult,
    handleGameReset: handleGameReset,
    setRandomWord: setRandomWord,
    setGameResult: setGameResult,
    randomWord: randomWord,
    secondRef: secondRef,
    thirdRef: thirdRef,
    fourthRef: fourthRef,
    fifthRef: fifthRef,
    setIsSubmitting: setIsSubmitting,
    setModalVisible: setModalVisible,
    setModalText: setModalText,
  }

  return (
    <View style={styles.userInputsWrapper}>
      {inputRefs.current.map((ref, index) => (
        <UserInput
          key={index}
          firstRef={ref}
          name={String(index + 1)}
          {...userInputProps}
        />
      ))}
    </View>
  )
}

export default UserInputs
