import { Controller, useForm } from 'react-hook-form'
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import { useEffect, useState } from 'react'
import { theme } from '../src/styles/theme'
import axios from 'axios'
import PrimaryModal from '../src/components/modals/PrimaryModal'
import { showMessage } from 'react-native-flash-message'

type FormValues = {
  firstName: string
}
const UserInput = ({
  randomWord,
  inputRef,
  name,
  guess,
  setGuess,
  secondRef,
  thirdRef,
  fourthRef,
  fifthRef,
  isSubmitted,
  setIsSubmitted,
  rowId,
  counter,
  setCounter,
  gameResult,
  handleGameReset,
  setGameResult,
  setRandomWord,
}) => {
  const [isMatch, setIsMatch] = useState(false)
  const [isPresent, setIsPresent] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)

  const word = randomWord[0]

  const { register, control } = useForm<FormValues>()

  useEffect(() => {
    if (guess.length === 0 && rowId === counter) {
      inputRef?.current?.focus()
    } else if (guess.length === 1) {
      secondRef?.current?.focus()
    } else if (guess.length === 2) {
      thirdRef?.current?.focus()
    } else if (guess.length === 3) {
      fourthRef?.current?.focus()
    } else if (guess.length === 4) {
      fifthRef?.current?.focus()
    }

    console.log(word, rowId, counter)
  }, [guess, counter])

  const handleCheck = (text) => {
    if (text) {
      const updatedGuess = [...guess, text.toUpperCase()]
      setGuess(updatedGuess)

      for (let i = 0; i < updatedGuess.length; i++) {
        updatedGuess[i].toUpperCase() &&
        word[i] === updatedGuess[i].toUpperCase()
          ? setIsMatch(true)
          : setIsMatch(false)
      }

      updatedGuess && word.includes(text.toUpperCase())
        ? setIsPresent(true)
        : setIsPresent(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Backspace') {
      setGuess((prevGuess) => prevGuess.slice(0, -1))
      setIsPresent(false)
      setIsMatch(false)
    }
  }

  const handleInputFocus = () => {
    setIsMatch(false)
    setIsPresent(false)
  }

  const createToast = () => {
    showMessage({
      message:
        guess.length < 5
          ? 'The word is too short'
          : 'There is no such word!',
      type: 'danger',
      animated: true,
      position: 'bottom',
      style: {
        alignItems: 'center',
      },
    })
  }

  const handleWordExist = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${guess.join(
          ''
        )}`
      )
      return response
    } catch (error) {
      createToast()
      return null
    }
  }

  const handleSubmit = async (e) => {
    const response = await handleWordExist()
    const isWordExists =
      response &&
      response.status === 200 &&
      guess.length === 5

    if (e.nativeEvent.key === 'Enter' && isWordExists) {
      setIsSubmitted(true)
      setCounter((prevState) => prevState + 1)
    } else {
      e.preventDefault()
      createToast()
      if (e.nativeEvent.key === 'Enter') {
        if (name === 'firstName') {
          inputRef?.current?.focus()
        } else if (name === '2') {
          secondRef?.current?.focus()
        } else if (name === '3') {
          thirdRef?.current?.focus()
        } else if (name === '4') {
          fourthRef?.current?.focus()
        } else if (name === '5') {
          fifthRef?.current?.focus()
        }
      }
    }

    if (word === guess.join('')) {
      setModalVisible(true)
      setGameResult(true)
    }

    if (counter === 6 && word !== guess.join('')) {
      setModalVisible(true)
      setGameResult(false)
    }

    console.log(word, rowId, counter)
  }

  // console.log({
  //   word: word,
  //   guess: guess.join(''),
  //   game: gameResult,
  // })

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 1,
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur } }) => (
          <TextInput
            {...register(name)}
            ref={
              name === 'firstName'
                ? inputRef
                : name === '2'
                ? secondRef
                : name === '3'
                ? thirdRef
                : name === '4'
                ? fourthRef
                : name === '5'
                ? fifthRef
                : null
            }
            outlineWidth={0}
            onBlur={onBlur}
            style={{
              width: 50,
              height: 50,
              backgroundColor:
                isMatch && isSubmitted
                  ? theme.colors.green
                  : isPresent && isSubmitted
                  ? theme.colors.yellow
                  : isPresent && isMatch && isSubmitted
                  ? theme.colors.green
                  : theme.colors.grey,
              textAlign: 'center',
              color: theme.colors.white,
              outlineWidth: 0,
              textTransform: 'uppercase',
              fontFamily: 'custom-font',
            }}
            onChangeText={(text) => {
              handleCheck(text)
            }}
            onKeyPress={handleKeyPress}
            onFocus={handleInputFocus}
            onSubmitEditing={handleSubmit}
            maxLength={1}
            editable={!isSubmitted}
          />
        )}
        rules={{ required: true }}
      />

      <View>
        {modalVisible ? (
          <PrimaryModal
            guess={guess}
            resultText={gameResult ? 'You won' : 'You lost'}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            handleGameReset={handleGameReset}
            setGameResult={setGameResult}
            setRandomWord={setRandomWord}
          />
        ) : null}
      </View>
    </View>
  )
}

export default UserInput
