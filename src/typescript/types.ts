import { Dispatch, SetStateAction, MutableRefObject } from 'react'
import { TextInput } from 'react-native'

export type TextInputRef = MutableRefObject<TextInput | null>

export type FormValues = {
  [key: string]: string
}

export type WordExampleProps = {
  letters: LettersArray[]
}

export type LettersArray =
  | 'P'
  | 'A'
  | 'R'
  | 'S'
  | 'I'
  | 'C'
  | 'L'
  | 'O'
  | 'W'
  | 'N'
  | 'M'
  | 'O'
  | 'T'
  | 'E'
  | 'S'

export interface UserInputsProps {
  randomWord: string
  modalText: string
  rowId: number
  chanceCounter: number
  gameResult: boolean
  modalVisible: boolean
  setRandomWord: Dispatch<SetStateAction<string>>
  setModalText: Dispatch<SetStateAction<string>>
  setChanceCounter: Dispatch<SetStateAction<number>>
  setIsSubmitting: Dispatch<SetStateAction<boolean>>
  setModalVisible: Dispatch<SetStateAction<boolean>>
  setGameResult: Dispatch<SetStateAction<boolean>>

  handleGameReset: () => void
}

export interface UserInputProps {
  randomWord: string
  name: string
  rowId: number
  chanceCounter: number
  isSubmitted: boolean
  gameResult: boolean
  guess: string[]
  setRandomWord: Dispatch<SetStateAction<string>>
  setModalText: Dispatch<SetStateAction<string>>
  setModalVisible: Dispatch<SetStateAction<boolean>>
  setChanceCounter: Dispatch<SetStateAction<number>>
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
  setGameResult: Dispatch<SetStateAction<boolean>>
  setIsSubmitting: Dispatch<SetStateAction<boolean>>
  firstRef: React.RefObject<TextInput> | null
  secondRef: React.RefObject<TextInput> | null
  thirdRef: React.RefObject<TextInput> | null
  fourthRef: React.RefObject<TextInput> | null
  fifthRef: React.RefObject<TextInput> | null
  setGuess: Dispatch<SetStateAction<string[]>>

  handleGameReset: () => void
}

export interface INavbarProps {
  title: string
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
  setModalText: Dispatch<SetStateAction<string>>
}

export interface IPrimaryModal {
  modalText: string
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
  setGameResult: Dispatch<SetStateAction<boolean>>
  children: any

  handleGameReset: () => void
}
