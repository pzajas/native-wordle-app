import { useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import UserInput from './UserInput'

const UserInputs = ({
  randomWord,
  rowId,
  setCounter,
  counter,
  gameResult,
  setGameResult,
}) => {
  const [guess, setGuess] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inputRef = useRef()
  const secondRef = useRef()
  const thirdRef = useRef()
  const fourthRef = useRef()
  const fifthRef = useRef()

  return (
    <View style={styles.container}>
      <UserInput
        randomWord={randomWord}
        inputRef={inputRef}
        name="firstName"
        guess={guess}
        setGuess={setGuess}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        rowId={rowId}
        setCounter={setCounter}
        counter={counter}
        gameResult={gameResult}
        setGameResult={setGameResult}
      />
      <UserInput
        randomWord={randomWord}
        secondRef={secondRef}
        name="2"
        guess={guess}
        setGuess={setGuess}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        counter={counter}
        setCounter={setCounter}
        gameResult={gameResult}
        setGameResult={setGameResult}
      />
      <UserInput
        randomWord={randomWord}
        thirdRef={thirdRef}
        name="3"
        guess={guess}
        setGuess={setGuess}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        counter={counter}
        setCounter={setCounter}
        gameResult={gameResult}
        setGameResult={setGameResult}
      />
      <UserInput
        randomWord={randomWord}
        fourthRef={fourthRef}
        name="4"
        guess={guess}
        setGuess={setGuess}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        setCounter={setCounter}
        counter={counter}
        gameResult={gameResult}
        setGameResult={setGameResult}
      />
      <UserInput
        randomWord={randomWord}
        fifthRef={fifthRef}
        name="5"
        guess={guess}
        setGuess={setGuess}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        counter={counter}
        setCounter={setCounter}
        gameResult={gameResult}
        setGameResult={setGameResult}
      />
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
