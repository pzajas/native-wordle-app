import { FunctionComponent, useState } from 'react'
import { UserInputProps } from '../src/typescript/types'

import {
  StyleSheet,
  View,
  TextInput,
  TextStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native'

const UserInput: FunctionComponent<UserInputProps> = ({
  index,
  checkWord,
  setCheckWord,
  randomWord,
}) => {
  const [input, setInput] = useState('')
  const [match, setMatch] = useState(false)
  const [present, setPresent] = useState(false)

  const handleCheck = (text: string) => {
    const uppercaseText = text.toUpperCase()
    setInput(uppercaseText)

    if (uppercaseText === randomWord[index]) {
      setMatch(true)
    } else if (randomWord.includes(uppercaseText)) {
      setPresent(true)
    }
  }

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (event.nativeEvent.key === 'Enter') {
      setCheckWord(true)
    }
  }

  const inputStyles: TextStyle = {
    ...styles.input,
    ...(match && checkWord && styles.match),
    ...(present && checkWord && styles.present),
  }

  return (
    <View>
      <TextInput
        value={input}
        onChangeText={(text) => handleCheck(text)}
        style={inputStyles}
        maxLength={1}
        onKeyPress={handleKeyPress}
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
