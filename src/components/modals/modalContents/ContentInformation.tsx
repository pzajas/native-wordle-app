/* eslint-disable indent */
import { View, Text } from 'react-native'
import { FunctionComponent } from 'react'
import { IRootState, LettersArray, WordExampleProps } from '@typescript/types'
import { informationModal } from '@utils/dictionary'
import { useSelector } from 'react-redux'
import { getStyles } from '@styles/styles'

const ContentText = ({ children }: { children: string }) => {
  const words = children.split(' ')
  const firstWord = words[0]
  const restOfWords = words.slice(1).join(' ')

  const theme = useSelector((state: IRootState) => state.theme)

  return (
    <Text
      style={{
        color: theme.primaryTextColor,
        fontSize: 12,
        marginBottom: 20,
      }}
    >
      <Text style={{ fontWeight: 'bold', color: theme.present }}>{firstWord}</Text> {restOfWords}
    </Text>
  )
}

const Letters = ({ letter }: { letter: string }) => {
  const { isColorBlindModeOn } = useSelector((state: IRootState) => state.boolean)
  const theme = useSelector((state: IRootState) => state.theme)
  const styles = getStyles(theme)

  return (
    <View
      style={[
        styles.modalInformationLetter,
        {
          backgroundColor:
            letter === 'N'
              ? isColorBlindModeOn
                ? theme.matchColorBlind
                : theme.match
              : letter === 'H'
              ? isColorBlindModeOn
                ? theme.presentColorBlind
                : theme.present
              : theme.primaryColor === '#181818'
              ? theme.primaryColor
              : theme.white,
          marginBottom: 3,
          marginRight: 1,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: 'grey',
        },
      ]}
    >
      <Text style={styles.modalInformationLetterText}>{letter}</Text>
    </View>
  )
}

const WordExample: FunctionComponent<WordExampleProps> = ({ letters }) => {
  const theme = useSelector((state: IRootState) => state.theme)
  const styles = getStyles(theme)
  return (
    <View style={styles.modalInformationContainer}>
      {letters.map((letter, index) => (
        <Letters key={index} letter={letter} />
      ))}
    </View>
  )
}

export const ContentInformation = () => {
  const theme = useSelector((state: IRootState) => state.theme)
  const styles = getStyles(theme)

  const wordNight: LettersArray[] = ['N', 'I', 'G', 'H', 'T']

  return (
    <View style={{ justifyContent: 'space-between' }}>
      <ContentText>{informationModal.introduction}</ContentText>
      <ContentText>{informationModal.objective}</ContentText>
      <ContentText>{informationModal.guessing}</ContentText>

      <View style={[styles.modalInformationContainer, { marginBottom: 20 }]}>
        <WordExample letters={wordNight} />
      </View>

      <ContentText>{informationModal.deduction}</ContentText>
      <ContentText>{informationModal.attempt}</ContentText>
      <ContentText>{informationModal.approach}</ContentText>
    </View>
  )
}
