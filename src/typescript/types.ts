export type UserInputProps = {
  index: number
  checkWord: boolean
  randomWord: string
  guessWord: string[]
  setGuessWord: React.Dispatch<string[]>
  setCheckWord: (value: boolean) => void
}

export type GameProps = {
  randomWord: string
}
