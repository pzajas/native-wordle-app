/* eslint-disable indent */
import { View, Text, StyleSheet } from 'react-native'
import { FunctionComponent } from 'react'
import { theme } from '../../../styles/theme'
import { LettersArray, WordExampleProps } from '../../../typescript/types'
import { informationModal } from '../../../utils/dictionary'

const ContentText = ({ children }: { children: string }) => {
  const words = children.split(' ')
  const firstWord = words[0]
  const restOfWords = words.slice(1).join(' ')
  return (
    <Text
      style={{
        color: theme.colors.white,
        fontSize: 12,
        marginBottom: 20,
      }}
    >
      <Text style={{ fontWeight: 'bold', color: theme.colors.yellow }}>
        {firstWord}
      </Text>{' '}
      {restOfWords}
    </Text>
  )
}

const Letters = ({ letter }: { letter: string }) => {
  return (
    <View
      style={[
        styles.letter,
        {
          backgroundColor:
            letter === 'P'
              ? theme.colors.green
              : letter === 'W'
              ? theme.colors.yellow
              : theme.colors.grey.dark,
          marginBottom: 3,
          marginRight: 1,
        },
      ]}
    >
      <Text style={styles.letterText}>{letter}</Text>
    </View>
  )
}

const WordExample: FunctionComponent<WordExampleProps> = ({ letters }) => {
  return (
    <View style={styles.container}>
      {letters.map((letter, index) => (
        <Letters key={index} letter={letter} />
      ))}
    </View>
  )
}

export const ContentInformation = () => {
  const wordParsi: LettersArray[] = ['P', 'A', 'R', 'S', 'I']
  const wordClown: LettersArray[] = ['C', 'L', 'O', 'W', 'N']
  const wordMotes: LettersArray[] = ['M', 'O', 'T', 'E', 'S']

  return (
    <View style={{ justifyContent: 'space-between' }}>
      <ContentText>{informationModal.introduction}</ContentText>
      <ContentText>{informationModal.objective}</ContentText>
      <ContentText>{informationModal.guessing}</ContentText>

      <View style={[styles.container]}>
        <WordExample letters={wordParsi} />
      </View>

      <View style={[styles.container]}>
        <WordExample letters={wordClown} />
      </View>

      <View style={[styles.container, { marginBottom: 20 }]}>
        <WordExample letters={wordMotes} />
      </View>

      <ContentText>{informationModal.deduction}</ContentText>
      <ContentText>{informationModal.attempt}</ContentText>
      <ContentText>{informationModal.approach}</ContentText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  letter: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.grey.dark,
  },
  letterText: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
})
