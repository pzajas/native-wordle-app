export type UserInputProps = {
  index: number
  checkWord: boolean
  randomWord: string

  setCheckWord: (value: boolean) => void
}

export type GameProps = {
  randomWord: string
}
