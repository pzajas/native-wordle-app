/* eslint-disable indent */
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { theme } from '../src/styles/theme'
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native'
import { createToast, handleWordExist } from '../funcs/helpers'
import { FormValues, UserInputProps } from '../src/typescript/types'
import { useDispatch } from 'react-redux'
import { incrementWins } from '../src/redux/features/winCounterSlice'
import { incrementLoses } from '../src/redux/features/loseCounterSlice'
import {
  incrementWinsInRow,
  resetWinsInRow,
} from '../src/redux/features/winsInRowSlice'
import { addChanceNumber } from '../src/redux/features/winsInTrySlice'

const UserInput = ({
  rowId,
  randomWord,
  firstRef,
  name,
  guess,
  setGuess,
  isSubmitted,
  setIsSubmitted,
  chanceCounter,
  setChanceCounter,
  setGameResult,
  setIsSubmitting,
  setModalVisible,
  setModalText,
}: UserInputProps) => {
  const [isMatch, setIsMatch] = useState(false)
  const [isPresent, setIsPresent] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const word: string = randomWord[0]
  const dispatch = useDispatch()

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
      setGuess((prevGuess: string[]) => prevGuess.slice(0, -1))
      setIsPresent(false)
      setIsMatch(false)
    }
  }

  const handleInputFocus = () => {
    setIsMatch(false)
    setIsPresent(false)
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  const handleSubmit = async (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    e.persist()
    setIsSubmitting(true)

    try {
      const response = await handleWordExist(guess)
      const userWord = guess.join('')

      const isProperWord =
        response && response.status === 200 && guess.length === 5

      if (guess.length === 5 && isProperWord) {
        setIsSubmitted(true)
        setChanceCounter((prevState: number) => prevState + 1)
      }

      if (e?.nativeEvent?.key === 'Enter' && !isProperWord) {
        createToast(guess)
      }

      if (chanceCounter === 6 && word !== userWord) {
        dispatch(incrementLoses())
        dispatch(resetWinsInRow())
        setModalText('GAME OVER')
        setModalVisible(true)
        setGameResult(false)
      }

      if (rowId === 6 && response?.status !== 200) {
        setModalVisible(false)
        setGameResult(false)
      }

      if (word === userWord) {
        dispatch(incrementWins())
        dispatch(incrementWinsInRow())
        dispatch(addChanceNumber(chanceCounter))
        setModalText('YOU WON')
        setModalVisible(true)
        setGameResult(true)
      }
    } catch (error) {
      console.error('Error occurred during API call:', error)
    }
    setIsSubmitting(false)
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
        render={() => (
          <TextInput
            {...register(name)}
            ref={firstRef}
            caretHidden
            onBlur={handleInputBlur}
            blurOnSubmit={false}
            style={{
              width: 50,
              height: 50,
              backgroundColor: isFocused
                ? theme.colors.grey.light
                : isSubmitted
                ? isMatch
                  ? theme.colors.green
                  : isPresent
                  ? theme.colors.yellow
                  : theme.colors.grey.dark
                : theme.colors.grey.dark,
              textAlign: 'center',
              color: theme.colors.white,
              borderColor: 'transparent',
              textTransform: 'uppercase',
              fontWeight: '800',
              fontSize: 20,
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
            autoCapitalize="characters"
          />
        )}
        rules={{
          required: true,
        }}
      />
    </View>
  )
}

export default UserInput
