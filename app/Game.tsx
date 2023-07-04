import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import UserInput from './UserInput'

const Game = () => {
  const [check, setCheck] = useState(false)

  const renderUserInputs = () => {
    const inputs = []

    for (let i = 0; i < 5; i++) {
      inputs.push(
        <UserInput
          key={i}
          index={i}
          check={check}
          setCheck={setCheck}
        />
      )
    }

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
