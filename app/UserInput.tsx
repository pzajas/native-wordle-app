import React, { useRef, useState, useEffect } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

const UserInput = ({ randomWord }) => {
  const { control, handleSubmit, reset } = useForm()
  const fieldRefs = useRef(
    Array.from({ length: 30 }, () => null)
  ) // Initialize with null values
  const [guessWord, setGuessWord] = useState([])
  const [letterExistState, setLetterExistState] = useState(
    Array.from({ length: 30 }, () => false)
  )
  const [letterMatchState, setLetterMatchState] = useState(
    Array.from({ length: 30 }, () => false)
  )

  const excludedIndices = [4, 9, 14, 19, 24, 29]

  const fields = Array.from({ length: 30 }, (_, index) => ({
    name: `field${index + 1}`,
    ref: useRef(),
    nextField: index + 1 === 30 ? null : index + 1,
  }))

  useEffect(() => {
    fields[0].ref.current.focus()
  }, [])

  useEffect(() => {
    // After rendering, update the fieldRefs array with the correct refs
    fieldRefs.current = fieldRefs.current.map(
      (ref, index) => fields[index].ref.current
    )
  }, [fields])

  const onNextField = (nextField) => {
    if (nextField === 0) {
      fieldRefs.current[nextField].focus() // Special case for the first field
    } else if (nextField < fields.length) {
      fieldRefs.current[nextField].focus()
    }
  }

  const handlePress = (index) => {
    const isWinner = randomWord === guessWord.join('')

    if (!isWinner && index < fields.length - 1) {
      fieldRefs.current[index + 1].focus()
      setGuessWord([])
    }
    if (isWinner) {
      alert('Win')
      setGuessWord([])
      reset()
    }
  }

  console.log(randomWord)

  return (
    <View style={styles.container}>
      {fields.map((field, index) => (
        <Controller
          key={field.name}
          control={control}
          render={({
            field: { onChange, onBlur, value },
          }) => (
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: (() => {
                    if (letterMatchState[index])
                      return 'green'
                    if (letterExistState[index])
                      return 'yellow'
                    return 'grey'
                  })(),
                },
              ]}
              onChangeText={(text) => {
                onChange(text)
                if (!excludedIndices.includes(index)) {
                  onNextField(field.nextField)
                }

                // Update letterExistState
                setLetterExistState(
                  (prevLetterExistState) => {
                    const newLetterExistState = [
                      ...prevLetterExistState,
                    ]
                    newLetterExistState[index] =
                      randomWord.includes(text)
                    return newLetterExistState
                  }
                )

                setLetterMatchState(
                  (prevLetterMatchState) => {
                    const newLetterMatchState = [
                      ...prevLetterMatchState,
                    ]
                    newLetterMatchState[index] =
                      randomWord[index] === text
                    return newLetterMatchState
                  }
                )

                setGuessWord((prevGuessWord) => {
                  const newGuessWord = [...prevGuessWord]
                  newGuessWord[index] = text
                  return newGuessWord
                })
              }}
              onBlur={onBlur}
              value={value}
              maxLength={1}
              ref={(ref) => {
                fieldRefs.current[index] = ref
                field.ref.current = ref
              }}
              onSubmitEditing={() => handlePress(index)}
            />
          )}
          name={field.name}
          rules={{ required: true }}
          defaultValue=""
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    gap: 5,
  },
  input: {
    width: 40,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
})

export default UserInput
