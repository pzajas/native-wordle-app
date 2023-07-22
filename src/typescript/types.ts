import {
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from 'react'
import { TextInput } from 'react-native'

export type TextInputRef =
  MutableRefObject<TextInput | null>

export type FormValues = {
  [key: string]: string
}
export interface UserInputsProps {
  rowId: number
  randomWord: string
  chanceCounter: number
  gameResult: boolean
  setGameResult: Dispatch<SetStateAction<boolean>>
  setRandomWord: Dispatch<SetStateAction<string>>
  setChanceCounter: Dispatch<SetStateAction<number>>

  handleGameReset: () => void
}

export interface UserInputProps {
  rowId: number
  randomWord: string
  setRandomWord: Dispatch<SetStateAction<string>>
  name: string
  guess: string[]
  isSubmitted: boolean
  chanceCounter: number
  gameResult: boolean
  setChanceCounter: Dispatch<SetStateAction<number>>
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
  setGameResult: Dispatch<SetStateAction<boolean>>
  setGuess: Dispatch<SetStateAction<string[]>>
  firstRef: React.RefObject<TextInput> | null
  secondRef: React.RefObject<TextInput> | null
  thirdRef: React.RefObject<TextInput> | null
  fourthRef: React.RefObject<TextInput> | null
  fifthRef: React.RefObject<TextInput> | null

  handleGameReset: () => void
}
