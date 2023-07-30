/* eslint-disable indent */
import { View, Text } from 'react-native'
import { FunctionComponent } from 'react'
import { LettersArray, WordExampleProps } from '../../../typescript/types'
import { informationModal } from '../../../utils/dictionary'
import { useSelector } from 'react-redux'
import { getStyles } from '../../../styles/styles'

const ContentText = ({ children }: { children: string }) => {
  const words = children.split(' ')
  const firstWord = words[0]
  const restOfWords = words.slice(1).join(' ')

  const theme = useSelector((state) => state.theme)

  return (
    <Text
      style={{
        color: theme.primaryTextColor,
        fontSize: 12,
        marginBottom: 20,
      }}
    >
      <Text style={{ fontWeight: 'bold', color: theme.present }}>
        {firstWord}
      </Text>{' '}
      {restOfWords}
    </Text>
  )
}

const Letters = ({ letter }: { letter: string }) => {
  const theme = useSelector((state) => state.theme)
  const styles = getStyles(theme)
  return (
    <View
      style={[
        styles.modalInformationLetter,
        {
          backgroundColor:
            letter === 'P'
              ? theme.match
              : letter === 'W'
              ? theme.present
              : 'grey',
          marginBottom: 3,
          marginRight: 1,
        },
      ]}
    >
      <Text style={styles.modalInformationLetterText}>{letter}</Text>
    </View>
  )
}

const WordExample: FunctionComponent<WordExampleProps> = ({ letters }) => {
  const theme = useSelector((state) => state.theme)
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
  const theme = useSelector((state) => state.theme)
  const styles = getStyles(theme)

  const wordParsi: LettersArray[] = ['P', 'L', 'A', 'Z', 'A']
  const wordClown: LettersArray[] = ['C', 'L', 'O', 'W', 'N']
  const wordMotes: LettersArray[] = ['M', 'O', 'T', 'E', 'S']

  return (
    <View style={{ justifyContent: 'space-between' }}>
      <ContentText>{informationModal.introduction}</ContentText>
      <ContentText>{informationModal.objective}</ContentText>
      <ContentText>{informationModal.guessing}</ContentText>

      <View style={[styles.modalInformationContainer]}>
        <WordExample letters={wordParsi} />
      </View>

      <View style={[styles.modalInformationContainer]}>
        <WordExample letters={wordClown} />
      </View>

      <View style={[styles.modalInformationContainer, { marginBottom: 20 }]}>
        <WordExample letters={wordMotes} />
      </View>

      <ContentText>{informationModal.deduction}</ContentText>
      <ContentText>{informationModal.attempt}</ContentText>
      <ContentText>{informationModal.approach}</ContentText>
    </View>
  )
}
