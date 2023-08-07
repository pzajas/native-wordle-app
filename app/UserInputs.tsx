import { useRef, useState, useEffect } from 'react'
import { View } from 'react-native'
import { IRootState, TextInputRef, UserInputsProps } from '@typescript/types'
import { useSelector } from 'react-redux'
import { getStyles } from '@styles/styles'

import UserInput from './UserInput'

const UserInputs = ({ rowId, handleGameReset }: UserInputsProps) => {
  const [guess, setGuess] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { chanceCounter } = useSelector((state: IRootState) => state.numbers)
  const theme = useSelector((state: IRootState) => state.theme)

  const styles = getStyles(theme)

  const firstRef: TextInputRef = useRef(null)
  const secondRef: TextInputRef = useRef(null)
  const thirdRef: TextInputRef = useRef(null)
  const fourthRef: TextInputRef = useRef(null)
  const fifthRef: TextInputRef = useRef(null)

  const inputRefs = useRef([firstRef, secondRef, thirdRef, fourthRef, fifthRef])

  useEffect(() => {
    if (guess.length === 0 && rowId === chanceCounter) {
      firstRef?.current?.focus()
    } else if (guess.length === 1) {
      secondRef?.current?.focus()
    } else if (guess.length === 2) {
      thirdRef?.current?.focus()
    } else if (guess.length === 3) {
      fourthRef?.current?.focus()
    } else if (guess.length === 4) {
      fifthRef?.current?.focus()
    }
  }, [guess.length, chanceCounter, rowId])

  const userInputProps = {
    rowId: rowId,
    guess: guess,
    setGuess: setGuess,
    isSubmitted: isSubmitted,
    setIsSubmitted: setIsSubmitted,
    secondRef: secondRef,
    thirdRef: thirdRef,
    fourthRef: fourthRef,
    fifthRef: fifthRef,
    handleGameReset: handleGameReset,
  }

  return (
    <View style={styles.userInputsWrapper}>
      {inputRefs.current.map((ref, index) => (
        <UserInput key={index} firstRef={ref} name={String(index + 1)} {...userInputProps} />
      ))}
    </View>
  )
}

export default UserInputs
