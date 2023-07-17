import React, { useRef, useEffect, useState } from 'react'
import { View, TextInput, Button } from 'react-native'

export default function App() {
  const [count, setCount] = useState(1)
  const [tries, setTries] = useState(1)

  const refs = Array(25)
    .fill(0)
    .map(() => useRef())

  const handleTextChange = (index, text, e) => {
    if (
      text.length >= 1 &&
      index < refs.length - 1 &&
      count !== 5
    ) {
      refs[index + 1].current.focus()
      setCount((prevState) => prevState + 1)
    } else if (
      count % 5 === 0 &&
      e &&
      e.nativeEvent.key === 'Enter'
    ) {
      console.log(index)
    }
  }

  const onSubmit = (e) => {
    if (count === 5 && e) {
      console.log('ppp')
    }
  }

  useEffect(() => {
    refs[0].current.focus()
  }, [])

  const inputs = refs.map((ref, index) => (
    <TextInput
      maxLength={1}
      key={index}
      ref={ref}
      style={{
        backgroundColor: 'grey',
        width: 40,
        height: 40,
      }}
      onSubmitEditing={onSubmit}
      onChangeText={(text) => handleTextChange(index, text)}
      onKeyPress={(e) =>
        handleTextChange(index, ref.current?.value, e)
      }
    />
  ))

  const rows = []
  let row = []
  for (let i = 0; i < inputs.length; i++) {
    row.push(inputs[i])
    if ((i + 1) % 5 === 0 || i === inputs.length - 1) {
      rows.push(
        <View
          key={i}
          style={{ flexDirection: 'row', gap: 10 }}
        >
          {row}
        </View>
      )
      row = []
    }
  }

  return <View style={{ gap: 10 }}>{rows}</View>
}
