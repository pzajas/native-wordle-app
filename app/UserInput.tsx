/* eslint-disable indent */
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native'
import { createToast, handleWordExist } from '../funcs/helpers'
import { FormValues, IRootState, UserInputProps } from '../src/typescript/types'
import { useDispatch, useSelector } from 'react-redux'
import { incrementWins } from '../src/redux/features/winCounterSlice'
import { incrementLoses } from '../src/redux/features/loseCounterSlice'
import { incrementWinsInRow, resetWinsInRow } from '../src/redux/features/winsInRowSlice'
import { addChanceNumber } from '../src/redux/features/winsInTrySlice'
import { resetChanceCounter, setChanceCounter } from '../src/redux/features/numbersSlice'
import { setGameResult, setIsModalvisible, setIsSubmitting } from '../src/redux/features/booleanSlice'
import { setModalText } from '../src/redux/features/stringsSlice'

const UserInput = ({ rowId, firstRef, name, guess, setGuess, isSubmitted, setIsSubmitted }: UserInputProps) => {
  const [isMatch, setIsMatch] = useState(false)
  const [isPresent, setIsPresent] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const { randomWord } = useSelector((state: IRootState) => state.strings)
  const { chanceCounter } = useSelector((state: IRootState) => state.numbers)
  const theme = useSelector((state: IRootState) => state.theme)

  const { register, control } = useForm<FormValues>()

  const dispatch = useDispatch()

  const word: string = randomWord[0]

  const handleCheck = (text: string) => {
    if (text) {
      const updatedGuess = [...guess, text.toUpperCase()]
      setGuess(updatedGuess)
      for (let i = 0; i < updatedGuess.length; i++) {
        updatedGuess[i]?.toUpperCase() && word[i] === updatedGuess[i].toUpperCase()
          ? setIsMatch(true)
          : setIsMatch(false)
      }

      updatedGuess && word.includes(text.toUpperCase()) ? setIsPresent(true) : setIsPresent(false)
    }
  }

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
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

  const handleSubmit = async (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    e.persist()
    dispatch(setIsSubmitting(true))

    try {
      const response = await handleWordExist(guess)
      const userWord = guess.join('')

      const isProperWord = response && response.status === 200 && guess.length === 5

      if (guess.length === 5 && isProperWord) {
        setIsSubmitted(true)
        dispatch(setChanceCounter())
      }

      if (e?.nativeEvent?.key === 'Enter' && !isProperWord) {
        createToast(guess)
      }

      if (chanceCounter === 6 && word !== userWord) {
        dispatch(incrementLoses())
        dispatch(resetWinsInRow())
        dispatch(resetChanceCounter())
        dispatch(setModalText('GAME OVER'))
        dispatch(setIsModalvisible(true))
        dispatch(setGameResult(false))
      }

      if (rowId === 6 && response?.status !== 200) {
        dispatch(setIsModalvisible(false))
        dispatch(setGameResult(false))
        dispatch(resetChanceCounter())
      }

      if (word === userWord) {
        dispatch(incrementWins())
        dispatch(incrementWinsInRow())
        dispatch(addChanceNumber(chanceCounter))
        dispatch(resetChanceCounter())
        dispatch(setModalText('YOU WON'))
        dispatch(setIsModalvisible(true))
        dispatch(setGameResult(true))
      }
    } catch (error) {
      console.error('Error occurred during API call:', error)
    }
    dispatch(setIsSubmitting(false))
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
                ? theme.focused
                : isSubmitted
                ? isMatch
                  ? theme.match
                  : isPresent
                  ? theme.present
                  : theme.secondaryColor
                : theme.primaryColor,
              color: isSubmitted ? theme.white : theme.primaryTextColor,
              textAlign: 'center',
              borderColor: 'grey',
              borderWidth: 1,
              textTransform: 'uppercase',
              fontWeight: '800',
              fontSize: 20,
              outline: 'none',
              borderRadius: 5,
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
