import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData, Text } from 'react-native'
import { createToast, handleWordExist } from '../funcs/helpers'
import { FormValues, IRootState, UserInputProps } from '../src/typescript/types'
import { useDispatch, useSelector } from 'react-redux'
import { setGameResult, setIsModalvisible, setIsSubmitting } from '../src/redux/features/booleanSlice'
import { setModalText } from '../src/redux/features/stringsSlice'
import {
  resetChanceCounter,
  setChanceCounter,
  incrementWins,
  incrementLoses,
  incrementWinsInTry,
} from '../src/redux/features/numbersSlice'

const UserInput = ({ firstRef, name, guess, setGuess, isSubmitted, setIsSubmitted, rowId }: UserInputProps) => {
  const [isMatch, setIsMatch] = useState(false)
  const [isPresent, setIsPresent] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isManyLetters, setIsManyLetters] = useState(0)

  const { chanceCounter } = useSelector((state: IRootState) => state.numbers)
  const { isColorBlindModeOn, isMultipleLettersMode } = useSelector((state: IRootState) => state.boolean)

  const { control } = useForm<FormValues>()

  const randomWord = useSelector((state: IRootState) => state.strings.randomWord[0])
  const theme = useSelector((state: IRootState) => state.theme)
  const dispatch = useDispatch()

  const handleCheck = (text: string) => {
    const textOccurrences = randomWord.split('').filter((char) => char.toUpperCase() === text.toUpperCase())

    if (text) {
      const updatedGuess = [...guess, text.toUpperCase()]
      setGuess(updatedGuess)

      for (let i = 0; i < updatedGuess.length; i++) {
        updatedGuess[i]?.toUpperCase() && randomWord[i] === updatedGuess[i].toUpperCase()
          ? setIsMatch(true)
          : setIsMatch(false)
      }

      updatedGuess && randomWord.includes(text.toUpperCase()) ? setIsPresent(true) : setIsPresent(false)
    }

    if (textOccurrences.length > 1) {
      setIsManyLetters(textOccurrences.length)
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
        dispatch(setChanceCounter(chanceCounter + 1))
      }

      if (e?.nativeEvent?.key === 'Enter' && !isProperWord) {
        createToast(guess)
      }

      if (chanceCounter === 6 && randomWord !== userWord) {
        dispatch(incrementLoses())
        dispatch(resetChanceCounter())
        dispatch(setModalText('GAME OVER'))
        dispatch(setIsModalvisible(true))
        dispatch(setGameResult(false))
      }

      if (randomWord === userWord) {
        handleInputBlur()
        setTimeout(() => {
          dispatch(incrementWins())
          dispatch(incrementWinsInTry(chanceCounter))
          dispatch(resetChanceCounter())
          dispatch(setModalText('YOU WON'))
          dispatch(setIsModalvisible(true))
          dispatch(setGameResult(true))
        }, 1000)
      }
    } catch (error) {
      console.error('Error occurred during API call:', error)
    }
    dispatch(setIsSubmitting(false))
  }

  console.log(isManyLetters)

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
        render={({ field }) => (
          <View style={{ position: 'relative' }}>
            <TextInput
              {...field}
              ref={firstRef}
              caretHidden
              focusable={rowId === chanceCounter}
              editable={rowId === chanceCounter}
              onBlur={handleInputBlur}
              blurOnSubmit={false}
              style={{
                width: 50,
                height: 50,
                backgroundColor: isFocused
                  ? theme.focused
                  : isSubmitted
                  ? isMatch && isColorBlindModeOn
                    ? theme.matchColorBlind
                    : isPresent && isColorBlindModeOn
                    ? theme.presentColorBlind
                    : isMatch
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
                borderRadius: 5,
              }}
              onChangeText={(text) => {
                handleCheck(text)
              }}
              onKeyPress={handleKeyPress}
              onFocus={handleInputFocus}
              onSubmitEditing={handleSubmit}
              maxLength={1}
              returnKeyType="default"
              autoCapitalize="characters"
            />
            {isSubmitted && isManyLetters > 1 && isMultipleLettersMode && (
              <View
                style={{
                  position: 'absolute',
                  right: 6,
                  bottom: 3,
                }}
              >
                <Text style={{ color: 'white', fontSize: 10 }}>{isManyLetters}</Text>
              </View>
            )}
          </View>
        )}
        rules={{
          required: true,
        }}
      />
    </View>
  )
}

export default UserInput
