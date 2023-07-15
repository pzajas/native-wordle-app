import {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
} from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native'

import { UserInputProps } from '../src/typescript/types'
import axios from 'axios'

const UserInput: FunctionComponent<UserInputProps> = ({
  index,
  checkWord,
  setCheckWord,
  randomWord,
  guessWord,
  setGuessWord,
}) => {
  const [input, setInput] = useState('')
  const [match, setMatch] = useState(false)
  const [present, setPresent] = useState(false)

  const inputRef = useRef<TextInput>(null)

  const handleBackspace = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      setGuessWord((prevState: string[]) => {
        const newArray = [...prevState]
        newArray.pop()
        return newArray
      })
    }
  }

  const handleCheck = (text: string) => {
    const uppercaseText = text.toUpperCase()
    setInput(uppercaseText)

    if (text !== '') {
      setGuessWord([...guessWord, text])
    }

    if (uppercaseText === randomWord[index]) {
      setMatch(true)
      setPresent(false)
    } else if (randomWord.includes(uppercaseText)) {
      setPresent(true)
      setMatch(false)
    } else {
      setMatch(false)
      setPresent(false)
    }
  }

  const handleSubmit: () => Promise<void> = async () => {
    const secretWord = guessWord.join('').toUpperCase()

    try {
      await axios.get(
        `https://polish-wordle-api.onrender.com/words/${secretWord.toLowerCase()}/word_exists`
      )
      setCheckWord(true)
      if (secretWord.toUpperCase() === randomWord) {
        setTimeout(() => {
          if (randomWord === secretWord) {
            console.log('win')
          }
        }, 500)
      }
    } catch (error) {
      setCheckWord(true)
      console.log('There is no such word in dictionary!')
    }
  }

  const inputStyles = [
    styles.input,
    match && checkWord && styles.match,
    present && checkWord && styles.present,
  ]

  useEffect(() => {
    if (index === 0 && inputRef.current) {
      inputRef.current.focus()
    }
  }, [index])

  return (
    <View>
      <TextInput
        ref={inputRef}
        value={input}
        onChangeText={handleCheck}
        style={inputStyles}
        maxLength={1}
        onKeyPress={handleBackspace}
        onSubmitEditing={handleSubmit}
      />
    </View>
  )
}

export default UserInput

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#808080',
    color: 'white',
    width: 40,
    height: 40,
    textAlign: 'center',
  },
  match: {
    backgroundColor: 'green',
  },
  present: {
    backgroundColor: 'brown',
  },
})
