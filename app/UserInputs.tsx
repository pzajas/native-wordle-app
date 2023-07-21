import { useRef, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import UserInput from './UserInput'

const UserInputs = ({
  randomWord,
  rowId,
  setCounter,
  counter,
  gameResult,
  setGameResult,
  handleGameReset,
  setRandomWord,
}) => {
  const [guess, setGuess] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const word = randomWord[0]

  const firstRef = useRef()
  const secondRef = useRef()
  const thirdRef = useRef()
  const fourthRef = useRef()
  const fifthRef = useRef()

  const inputRefs = useRef([
    firstRef,
    secondRef,
    thirdRef,
    fourthRef,
    fifthRef,
  ])

  const userInputProps = {
    rowId: rowId,
    guess: guess,
    setGuess: setGuess,
    isSubmitted: isSubmitted,
    setIsSubmitted: setIsSubmitted,
    counter: counter,
    setCounter: setCounter,
    gameResult: gameResult,
    handleGameReset: handleGameReset,
    setRandomWord: setRandomWord,
    setGameResult: setGameResult,
    randomWord: randomWord,
  }

  useEffect(() => {
    if (guess.length === 0 && rowId === counter) {
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
  }, [guess.length, counter, rowId, word])

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  },
})

export default UserInputs
