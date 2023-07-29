import { StyleSheet } from 'react-native'

export const getStyles = (theme) =>
  StyleSheet.create({
    appWrapper: {
      flexDirection: 'column',
      height: '100%',
      backgroundColor: theme.primaryColor,
      fontWeight: '100',
    },
    appText: {
      fontSize: 2,
      color: theme.secondaryColor,
    },
    appFlatList: {
      marginTop: 60,
      height: '100%',
      gap: 2,
    },

    userInputsWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
    },

    userInputText: {
      color: 'red',
      backgroundColor: theme.secondaryColor,
    },
    modalView: {
      height: '100%',
      width: '100%',
      margin: 20,
      backgroundColor: theme.primaryColor,
      borderColor: '#fff',
      borderWidth: 1,
      padding: 50,
      alignItems: 'center',
      shadowColor: theme.match,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  })
