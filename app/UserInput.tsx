import { Controller, useForm } from 'react-hook-form'
import { View, TextInput } from 'react-native'
import { useEffect, useState } from 'react'

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
}) => {
  const [isMatch, setIsMatch] = useState(false)
  const [isPresent, setIsPresent] = useState(false)

  const word = randomWord[0]

  const { register, control } = useForm<FormValues>()

  useEffect(() => {
    if (guess.length === 0) {
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
  }, [guess])

  const handleCheck = (text) => {
    if (text) {
      const updatedGuess = [...guess, text]
      setGuess(updatedGuess)

      for (let i = 0; i < updatedGuess.length; i++) {
        updatedGuess[i] && word[i] === updatedGuess[i]
          ? setIsMatch(true)
          : setIsMatch(false)
      }

      updatedGuess && word.includes(text)
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

  console.log(guess)

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur } }) => (
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
            style={{
              width: 40,
              height: 40,
              backgroundColor: isMatch
                ? 'green'
                : isPresent
                ? 'yellow'
                : isPresent && isMatch
                ? 'green'
                : 'grey',
              borderWidth: 1,
            }}
            onChangeText={(text) => {
              handleCheck(text)
            }}
            onKeyPress={handleKeyPress}
            onFocus={handleInputFocus}
            maxLength={1}
          />
        )}
        rules={{ required: true }}
      />
    </View>
  )
}

export default UserInput
