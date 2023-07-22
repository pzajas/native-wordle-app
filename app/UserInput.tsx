/* eslint-disable indent */
import { Controller, useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { theme } from '../src/styles/theme'
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native'
import {
  createToast,
  handleWordExist,
} from '../funcs/helpers'
import {
  FormValues,
  UserInputProps,
} from '../src/typescript/types'

import PrimaryModal from '../src/components/modals/PrimaryModal'

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
  chanceCounter,
  setChanceCounter,
  gameResult,
  handleGameReset,
  setGameResult,
}: UserInputProps) => {
  const [isMatch, setIsMatch] = useState(false)
  const [isPresent, setIsPresent] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const word: string = randomWord[0]

  const { register, control } = useForm<FormValues>()

  const handleCheck = (text: string) => {
    if (text) {
      const updatedGuess = [...guess, text.toUpperCase()]
      setGuess(updatedGuess)

      for (let i = 0; i < updatedGuess.length; i++) {
        updatedGuess[i]?.toUpperCase() &&
        word[i] === updatedGuess[i].toUpperCase()
          ? setIsMatch(true)
          : setIsMatch(false)
      }

      updatedGuess && word.includes(text.toUpperCase())
        ? setIsPresent(true)
        : setIsPresent(false)
    }
  }

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      setGuess((prevGuess: string[]) =>
        prevGuess.slice(0, -1)
      )
      setIsPresent(false)
      setIsMatch(false)
    }
  }

  const handleInputFocus = () => {
    setIsMatch(false)
    setIsPresent(false)
  }

  const handleSubmit = async (e: any) => {
    e.persist()

    try {
      const response = await handleWordExist(guess)
      const userWord = guess.join('')

      const isProperWord =
        response &&
        response.status === 200 &&
        guess.length === 5

      if (guess.length === 5 && isProperWord) {
        setIsSubmitted(true)
        setChanceCounter(
          (prevState: number) => prevState + 1
        )
      }

      if (
        e?.nativeEvent?.key === 'Enter' &&
        !isProperWord
      ) {
        firstRef?.current?.focus()
        secondRef?.current?.focus()
        thirdRef?.current?.focus()
        fourthRef?.current?.focus()
        fifthRef?.current?.focus()

        createToast(guess)
      }

      if (chanceCounter === 6 && word !== userWord) {
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
    } catch (error) {
      console.error(
        'Error occurred during API call:',
        error
      )
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
            caretHidden
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
              outline: 'none',
              color: theme.colors.white,
              borderColor: 'transparent',
              textTransform: 'uppercase',
              fontWeight: '800',
              fontSize: '20',
            }}
            onChangeText={(text) => {
              handleCheck(text)
            }}
            onKeyPress={handleKeyPress}
            onFocus={handleInputFocus}
            onSubmitEditing={handleSubmit}
            editable={!isSubmitted}
            maxLength={1}
            returnKeyType="default"
          />
        )}
        rules={{
          required: true,
        }}
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
