import { Dispatch, SetStateAction, MutableRefObject } from 'react'
import { TextInput } from 'react-native'
import { IStrings } from '../redux/features/stringsSlice'
import { INumbers } from '../redux/features/numbersSlice'
import { IBoolean } from '../redux/features/booleanSlice'
import { ITheme } from '../redux/features/themeSlice'

export type TextInputRef = MutableRefObject<TextInput | null>

export type FormValues = {
  [key: string]: string
}

export type WordExampleProps = {
  letters: LettersArray[]
}

export type LettersArray = 'P' | 'A' | 'R' | 'S' | 'I' | 'C' | 'L' | 'O' | 'W' | 'N' | 'M' | 'O' | 'T' | 'E' | 'S' | 'Z'

export interface UserInputsProps {
  rowId: number

  handleGameReset: () => void
}

export interface UserInputProps {
  name: string
  isSubmitted: boolean
  guess: string[]
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
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
}

export interface IPrimaryModal {
  children: any

  handleGameReset: () => void
}

export interface IRootState {
  strings: IStrings
  numbers: INumbers
  boolean: IBoolean

  theme: ITheme
}
