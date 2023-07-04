import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TextStyle,
} from 'react-native'

interface UserInputProps {
  index: number
  check: boolean
  setCheck: (value: boolean) => void
}

const UserInput: React.FC<UserInputProps> = ({
  index,
  check,
  setCheck,
}) => {
  const [input, setInput] = useState('')

  const [match, setMatch] = useState(false)
  const [present, setPresent] = useState(false)

  const randomWord = 'TIGER'

  const handleCheck = (text: string) => {
    setInput(text)

    if (
      text.toUpperCase() === randomWord[index].toUpperCase()
    ) {
      setMatch(true)
    } else if (randomWord.includes(text.toUpperCase())) {
      setPresent(true)
    }

    if (index === 4) {
      setCheck(true)
    }
  }

  const inputStyles: TextStyle[] = [
    styles.input,
    match && check ? styles.match : null,
    present && check ? styles.present : null,
  ].filter(Boolean) as TextStyle[]

  return (
    <View>
      <TextInput
        value={input}
        onChangeText={(text) =>
          handleCheck(text.toUpperCase())
        }
        style={inputStyles}
        maxLength={1}
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
