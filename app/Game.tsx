import { View } from 'react-native'
import UserInput from './UserInput'
import { useRef, useEffect } from 'react'

const Game = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
      }}
    >
      <UserInput />
    </View>
  )
}

export default Game
