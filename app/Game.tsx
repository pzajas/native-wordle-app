import { FunctionComponent, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { GameProps } from '../src/typescript/types'

import UserInput from './UserInput'

const Game: FunctionComponent<GameProps> = ({
  randomWord,
}) => {
  const [checkWord, setCheckWord] = useState(false)

  const renderUserInputs = () => {
    const inputs = Array.from({ length: 5 }, (_, i) => (
      <UserInput
        key={i}
        index={i}
        checkWord={checkWord}
        setCheckWord={setCheckWord}
        randomWord={randomWord}
      />
    ))

    return inputs
  }

  return (
    <View style={styles.container}>
      {renderUserInputs()}
    </View>
  )
}

export default Game

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
})