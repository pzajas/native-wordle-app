import { Controller, useForm } from 'react-hook-form'
import { View, TextInput } from 'react-native'
import { useState } from 'react'
import { theme } from '../src/styles/theme'
import { showMessage } from 'react-native-flash-message'

import axios from 'axios'
import PrimaryModal from '../src/components/modals/PrimaryModal'

type FormValues = {
  firstName: string
}
const UserInput = ({
  rowId,
  randomWord,
  firstRef,
  name,
  guess,
  setGuess,
  secondRef,
  thirdRef,
  fourthRef,
  fifthRef,
  isSubmitted,
  setIsSubmitted,
  counter,
  setCounter,
  gameResult,
  handleGameReset,
  setGameResult,
}) => {
  const [isMatch, setIsMatch] = useState(false)
  const [isPresent, setIsPresent] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const word = randomWord[0]

  const { register, control } = useForm<FormValues>()

  const handleCheck = (text: string) => {
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
        `https://api.dictionaryapi.dev/api/v2/entries/en/${(
          guess as string[]
        ).join('')}`
      )
      return response
    } catch (error) {
      createToast()
      return null
    }
  }

  const handleSubmit = async (e) => {
    const response = await handleWordExist()
    const userWord = guess.join('')

    const isProperWord =
      response &&
      response.status === 200 &&
      guess.length === 5

    if (e.nativeEvent.key === 'Enter' && isProperWord) {
      setIsSubmitted(true)
      setCounter((prevState) => prevState + 1)
    } else {
      e.preventDefault()
      if (e.nativeEvent.key === 'Enter') {
        if (name) {
          firstRef?.current?.focus()
        } else if (name) {
          secondRef?.current?.focus()
        } else if (name) {
          thirdRef?.current?.focus()
        } else if (name) {
          fourthRef?.current?.focus()
        } else if (names) {
          fifthRef?.current?.focus()
        }
      }
      createToast()
    }

    if (counter === 6 && word !== userWord) {
      setModalVisible(true)
      setGameResult(false)
    }

    if (rowId === 6 && response?.status !== 200) {
      setModalVisible(false)
      setGameResult(false)
    }

    if (word === userWord) {
      setModalVisible(true)
      setGameResult(true)
    }
  }

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
            ref={firstRef}
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
            editable={!isSubmitted}
            maxLength={1}
          />
        )}
        rules={{ required: true }}
      />

      <View>
        {modalVisible ? (
          <PrimaryModal
            resultText={gameResult ? 'You won' : 'You lost'}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            handleGameReset={handleGameReset}
            setGameResult={setGameResult}
          />
        ) : null}
      </View>
    </View>
  )
}

export default UserInput
