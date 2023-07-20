import React, { useRef, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import UserInput from './UserInput'

type FormValues = {
  firstName: string
}

const UserInputs = ({ randomWord }) => {
  const [guess, setGuess] = useState([])
  const { control, setFocus, register } =
    useForm<FormValues>()

  const inputRef = useRef()
  const secondRef = useRef()
  const thirdRef = useRef()
  const fourthRef = useRef()
  const fifthRef = useRef()

  console.log(randomWord[0])
  console.log(randomWord[0] === guess.join(''))

  return (
    <View style={styles.container}>
      <UserInput
        randomWord={randomWord}
        inputRef={inputRef}
        name="firstName"
        guess={guess}
        setGuess={setGuess}
      />
      <UserInput
        randomWord={randomWord}
        secondRef={secondRef}
        name="2"
        guess={guess}
        setGuess={setGuess}
      />
      <UserInput
        randomWord={randomWord}
        thirdRef={thirdRef}
        name="3"
        guess={guess}
        setGuess={setGuess}
      />
      <UserInput
        randomWord={randomWord}
        fourthRef={fourthRef}
        name="4"
        guess={guess}
        setGuess={setGuess}
      />
      <UserInput
        randomWord={randomWord}
        fifthRef={fifthRef}
        name="5"
        guess={guess}
        setGuess={setGuess}
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
    padding: 5,
    gap: 5,
  },
})

export default UserInputs
